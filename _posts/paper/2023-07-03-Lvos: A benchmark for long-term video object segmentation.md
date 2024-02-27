---
title:  'Lvos: A benchmark for long-term video object segmentation'  #  Paper title, covered by ''
teser: 2023hongiccv.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2023-07-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Lingyi Hong, Wenchao Chen, Zhongying Liu, Wei Zhang, Pinxue Guo, Zhaoyu Chen, Wenqiang Zhang # authors information
venue:  Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2023  # paper year, number
month:  July # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None # If has data, post code link here, otherwise None
paperLink: https://openaccess.thecvf.com/content/ICCV2023/papers/Hong_LVOS_A_Benchmark_for_Long-term_Video_Object_Segmentation_ICCV_2023_paper.pdf # post paper pdf link here
---

Existing video object segmentation (VOS) benchmarks focus on short-term videos which just last about 3-5 seconds and where objects are visible most of the time. These videos are poorly representative of practical applications, and the absence of long-term datasets restricts further investigation of VOS on the application in realistic scenarios. So, in this paper, we present a new benchmark dataset and evaluation methodology named LVOS, which consists of 220 videos with a total duration of 421 minutes. To the best of our knowledge, LVOS is the first densely annotated long-term VOS dataset. The videos in our LVOS last 1.59 minutes on average, which is 20 times longer than videos in existing VOS datasets. Each video includes various attributes, especially challenges deriving from the wild, such as long-term reappearing and cross-temporal similar objects. Based on LVOS, we assess existing video object segmentation algorithms and propose a Diverse Dynamic Memory network (DDMemory) that consists of three complementary memory banks to exploit temporal information adequately. The experimental results demonstrate the strength and weaknesses of prior methods, pointing promising directions for further study. Our objective is to provide the community with a large and varied benchmark to boost the advancement of long-term VOS.