#!/usr/bin/env node

/**
 * Apple AirPods Pro 页面资源下载脚本
 * 
 * 从 https://www.apple.com.cn/airpods-pro/ 提取的图片和视频资源
 * 下载到 public/ 目录下，保持分类结构
 */

import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { get } from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT_DIR, 'public');

// ── 资源清单 ──

const ASSETS = {
  images: {
    hero: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/welcome/hero__b0eal3mn03ua_large.jpg', name: 'hero.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/welcome/hero_endframe__vzawkxxoc72u_large.jpg', name: 'hero_endframe.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/welcome/hero_startframe__bfinf01b59si_large.jpg', name: 'hero_startframe.jpg' },
    ],
    highlights: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/highlights/highlights_noise_cancellation__cxd50c0etw4m_large.jpg', name: 'highlights_noise_cancellation.jpg' },
      { url: 'https://www.apple.com.cn/airpods-pro/images/overview/highlights/highlights_heart_rate__emqj469iyfsm_large.webp', name: 'highlights_heart_rate.webp' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/highlights/highlights_acoustic__fiq4ppflft6q_large.jpg', name: 'highlights_acoustic.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/highlights/highlights_noise_cancellation_hearing_aid__eni46zr12ogi_large.jpg', name: 'highlights_hearing_aid.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/highlights/highlights_battery_endframe__f5ljqvliqpym_large.jpg', name: 'highlights_battery_endframe.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/highlights/highlights_battery_startframe__djmk5ebqjs8y_large.jpg', name: 'highlights_battery_startframe.jpg' },
    ],
    productViewer: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/product-viewer/closer_look_initial__cksqga5hm77m_large.jpg', name: 'closer_look_initial.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/product-viewer/closer_look_acoustic_a__dz4nc2yr9aqa_large.jpg', name: 'closer_look_acoustic.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/product-viewer/closer_look_fit_feel__blsfw2dgyj6q_large.jpg', name: 'closer_look_fit_feel.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/product-viewer/closer_look_heart_rate__bt709o8p7t5y_large.jpg', name: 'closer_look_heart_rate.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/product-viewer/closer_look_water_resistance__btut3m43on36_large.jpg', name: 'closer_look_water_resistance.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/product-viewer/closer_look_touch_control__dqo4p6ue36gm_large.jpg', name: 'closer_look_touch_control.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/product-viewer/closer_look_case__bjx2hp0oo16u_large.jpg', name: 'closer_look_case.jpg' },
    ],
    noiseControl: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/noise-control/noise_control_startframe__fea2j3ie71ea_large.png', name: 'noise_control_startframe.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/noise-control/noise_control_endframe__c9nekquzw4q6_large.png', name: 'noise_control_endframe.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/noise-control/gallery/noise_control_low_noise_mic__kb6kvtgc5aa2_large.jpg', name: 'noise_control_low_noise_mic.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/noise-control/gallery/noise_control_voice_isolation__c6b9qlmdbx4y_large.jpg', name: 'noise_control_voice_isolation.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/noise-control/gallery/noise_control_adaptive_audio__gcfn46ubu82u_large.jpg', name: 'noise_control_adaptive_audio.jpg' },
      { url: 'https://www.apple.com.cn/airpods-pro/images/overview/noise-control/gallery/noise_control_conversation_awareness__fl1nx541suye_large.webp', name: 'noise_control_conversation_awareness.webp' },
    ],
    audioPerformance: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/audio-performance/audio_airpods_pro_pair__v28g95nj97mq_large.png', name: 'audio_airpods_pro_pair.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/audio-performance/design_startframe__cy9tz9to92oi_large.png', name: 'design_startframe.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/audio-performance/design_endframe__gc2e2e5qz7ue_large.png', name: 'design_endframe.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/audio-performance/audio_airpods_pro_guts__gbhfrhkjpjyy_large.png', name: 'audio_airpods_pro_guts.png' },
    ],
    personalizedListening: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/personalized-listening/personalized_listening__geshsqt82yeu_large.jpg', name: 'personalized_listening.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/personalized-listening/icon_adaptive_eq__byv4qlrb6cz6_large.png', name: 'icon_adaptive_eq.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/personalized-listening/icon_personalized_spatial_audio__s1e3hae8l4ya_large.png', name: 'icon_spatial_audio.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/personalized-listening/icon_dynamic_head_tracking__c4hu1xaevcuq_large.png', name: 'icon_head_tracking.png' },
    ],
    fitness: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/fitness/fitness_hero_endframe__cbbu1uukdjyq_large.png', name: 'fitness_hero_endframe.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/fitness/fitness_hero_startframe__bkez1lr95bde_large.png', name: 'fitness_hero_startframe.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/fitness/icon_water_resistance__t2rmbvnakkyq_large.png', name: 'icon_water_resistance.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/fitness/fitness_workout_buddy_lifestyle__eavcyne0aaoi_large.png', name: 'fitness_workout_buddy.png' },
    ],
    hearingHealth: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/hearing-health/hearing_health_lifestyle__cj3yilvm69ea_large.png', name: 'hearing_health_lifestyle.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/hearing-health/hearing_health_lifestyle_enhanced__fkdyyeq20bau_large.png', name: 'hearing_health_lifestyle_enhanced.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/hearing-health/hearing_health_endframe__fddd0pwvl3u6_large.png', name: 'hearing_health_endframe.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/hearing-health/hearing_health_startframe__b55bsu6g3ok2_large.png', name: 'hearing_health_startframe.png' },
    ],
    magical: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/magical/magical_experience_controls__bfwb869bitbm_large.jpg', name: 'magical_controls.jpg' },
      { url: 'https://www.apple.com.cn/airpods-pro/images/overview/magical/connectivity_endframe__c1c58umoj7au_large.jpg', name: 'connectivity_endframe.jpg' },
      { url: 'https://www.apple.com.cn/airpods-pro/images/overview/magical/connectivity_startframe__bxoyv9avrimu_large.jpg', name: 'connectivity_startframe.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/magical/icon_notifications__dz0hl8mc152e_large.png', name: 'icon_notifications.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/magical/icon_audio_sharing__bk0bzzrjku1y_large.png', name: 'icon_audio_sharing.png' },
    ],
    battery: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/battery/case__b87ou7jna9de_large.png', name: 'battery_case.png' },
      { url: 'https://www.apple.com.cn/airpods-pro/images/overview/battery/find_my__cvjw4c07da2q_large.webp', name: 'find_my.webp' },
    ],
    contrast: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/contrast/explore_airpods_pro_3_open__e4dxk8zpalkm_large.jpg', name: 'airpods_pro_3.jpg' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/contrast/icon_active_noise_cancellation__cu3ni5umcw6e_large.png', name: 'icon_noise_cancellation.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/contrast/icon_group_2__egj6xed61t4y_large.png', name: 'icon_spatial_audio_group.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/contrast/person_spatialaudio__c9wmu8y19oom_large.png', name: 'person_spatial_audio.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/contrast/icon_heart_rate__bi0fmerqeknm_large.png', name: 'icon_heart_rate.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/contrast/icon_ear_badge_waveform_elevated__gjfl9l9fv6mq_large.png', name: 'icon_ear_waveform.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/contrast/chip_h2__fxu57e22criy_large.png', name: 'chip_h2.png' },
    ],
    environment: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/environment/icon_recycling__c7i5efoa8p8i_large.png', name: 'icon_recycling.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/environment/icon_electricity__ggoppgvmfpua_large.png', name: 'icon_electricity.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/environment/icon_package__es51hf1p9h8i_large.png', name: 'icon_package.png' },
    ],
    values: [
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/values/icon_environment__fo04kjojopym_large.png', name: 'icon_environment.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/values/icon_privacy__59wrw6a3keqa_large.png', name: 'icon_privacy.png' },
      { url: 'https://www.apple.com.cn/v/airpods-pro/r/images/overview/values/icon_accessibility__d2tat6ki2tua_large.png', name: 'icon_accessibility.png' },
    ],
    meta: [
      { url: 'https://www.apple.com.cn/airpods-pro/images/meta/wechat/og__c0ceegchesom_overview.webp', name: 'og_image.webp' },
    ],
  },
  videos: {
    hero: [
      { url: 'https://www.apple.com.cn/105/media/us/airpods-pro/2025/7acffb13-4adb-40b1-9393-8f1c99bc6c90/anim/hero/large_2x.mp4', name: 'hero.mp4' },
    ],
  },
};

// ── 下载函数 ──

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    if (existsSync(destPath)) {
      console.log(`  ✓ 已存在: ${destPath}`);
      resolve(destPath);
      return;
    }

    const dir = dirname(destPath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    console.log(`  ↓ 下载: ${url}`);
    const file = createWriteStream(destPath);

    const request = (currentUrl) => {
      get(currentUrl, (res) => {
        // 处理重定向
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          request(res.headers.location);
          return;
        }

        if (res.statusCode !== 200) {
          file.close();
          reject(new Error(`HTTP ${res.statusCode}: ${currentUrl}`));
          return;
        }

        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`  ✓ 完成: ${destPath}`);
          resolve(destPath);
        });
      }).on('error', (err) => {
        file.close();
        reject(err);
      });
    };

    request(url);
  });
}

// ── 主执行逻辑 ──

async function downloadAllAssets() {
  console.log('🚀 开始下载 Apple AirPods Pro 页面资源...\n');

  let total = 0;
  let success = 0;
  let failed = 0;

  // 下载图片
  for (const [category, files] of Object.entries(ASSETS.images)) {
    console.log(`\n📁 图片分类: ${category}`);
    for (const file of files) {
      total++;
      const destPath = join(PUBLIC_DIR, 'images', category, file.name);
      try {
        await downloadFile(file.url, destPath);
        success++;
      } catch (err) {
        console.error(`  ✗ 失败: ${file.url} - ${err.message}`);
        failed++;
      }
    }
  }

  // 下载视频
  for (const [category, files] of Object.entries(ASSETS.videos)) {
    console.log(`\n📁 视频分类: ${category}`);
    for (const file of files) {
      total++;
      const destPath = join(PUBLIC_DIR, 'videos', category, file.name);
      try {
        await downloadFile(file.url, destPath);
        success++;
      } catch (err) {
        console.error(`  ✗ 失败: ${file.url} - ${err.message}`);
        failed++;
      }
    }
  }

  console.log(`\n\n📊 下载统计:`);
  console.log(`  总计: ${total}`);
  console.log(`  成功: ${success}`);
  console.log(`  失败: ${failed}`);
  console.log(`\n✅ 资源下载完成！`);
}

downloadAllAssets().catch(console.error);