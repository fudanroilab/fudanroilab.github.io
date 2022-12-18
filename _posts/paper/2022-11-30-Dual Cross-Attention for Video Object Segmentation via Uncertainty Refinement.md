---
title:  'Dual Cross-Attention for Video Object Segmentation via Uncertainty Refinement'  #  Paper title, covered by ''
teser: 2022hongtmm.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-11-30 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jiahao Hong, Wei Zhang, Zhiwei Feng, Wenqiang Zhang # authors information
venue:  IEEE Transactions on Multimedia (CCF B) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  November # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/abstract/document/9966825 # post paper pdf link here
---

In this paper, we propose a novel approach to video object segmentation where dual streams consisting of a shared network and a special network are designed to constitute the feature memory of history frames. Cues of spatial position and time stamp are explicitly explored to learn the context for each frame in the video sequence. Self-attention and cross-attention are simultaneously exploited to extract more powerful features for segmentation. In contrast to STM and its variants, the proposed dual cross-attention performs in both appearance space and semantic space such that the derived features are more distinctive and then robust to similar overlapping objects. During decoding for segmentation, a local refinement technique is designed for the uncertain boundaries to obtain more precise and smooth object contours. Experimental results on the challenging benchmark datasets DAVIS-2016, DAVIS-2017, and YouTube-VOS demonstrate the effectiveness of our proposed approach to video object segmentation.