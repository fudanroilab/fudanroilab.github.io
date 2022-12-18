---
title:  'DPCNet: Dual Path Multi-Excitation Collaborative Network for Facial Expression Representation Learning in Videos'  #  Paper title, covered by ''
teser: 2022wangmm.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-10-10 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yan Wang, Yixuan Sun, Wei Song, Shuyong Gao, Yiwen Huang, Zhaoyu Chen, Weifeng Ge, Wenqiang Zhang # authors information
venue:  Proceedings of the 30th ACM International Conference on Multimedia (ACMMM 2022) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  October # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://dl.acm.org/doi/abs/10.1145/3503161.3547865 # post paper pdf link here
---

Current works of facial expression learning in video consume significant computational resources to learn spatial channel feature representations and temporal relationships. To mitigate this issue, we propose a Dual Path multi-excitation Collaborative Network (DPCNet) to learn the critical information for facial expression representation from fewer keyframes in videos. Specifically, the DPCNet learns the important regions and keyframes from a tuple of four view-grouped frames by multi-excitation modules and produces dual-path representations of one video with consistency under two regularization strategies. A spatial-frame excitation module and a channel-temporal aggregation module are introduced consecutively to learn spatial-frame representation and generate complementary channel-temporal aggregation, respectively. Moreover, we design a multi-frame regularization loss to enforce the representation of multiple frames in the dual view to be semantically coherent. To obtain consistent prediction probabilities from the dual path, we further propose a dual path regularization loss, aiming to minimize the divergence between the distributions of two-path embeddings. Extensive experiments and ablation studies show that the DPCNet can significantly improve the performance of video-based FER and achieve state-of-the-art results on the large-scale DFEW dataset.