---
title:  'Multi-scale Matching Networks for Semantic Correspondence'  #  Paper title, covered by ''
teser: zhao2021.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2020-07-31 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Dongyang Zhao, Ziyang Song, Zhenghao Ji, Gangming Zhao, Weifeng Ge, Yizhou Yuu  # authors information
venue:  IEEE International Conference on Computer Vision 2021  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  July  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/2108.00580  # post paper pdf link here
---

Deep features have been proven powerful in building accurate dense semantic correspondences in various previous works. However, the multi-scale and pyramidal hierarchy of convolutional neural networks has not been well studied to learn discriminative pixel-level features for semantic correspondence. In this paper, we propose a multi-scale matching network that is sensitive to tiny semantic differences between neighboring pixels. We follow the coarse-to-fine matching strategy and build a top-down feature and matching enhancement scheme that is coupled with the multi-scale hierarchy of deep convolutional neural networks. During feature enhancement, intra-scale enhancement fuses same-resolution feature maps from multiple layers together via local self-attention and cross-scale enhancement hallucinates higher-resolution feature maps along the top-down hierarchy. Besides, we learn complementary matching details at different scales thus the overall matching score is refined by features of different semantic levels gradually. Our multi-scale matching network can be trained end-to-end easily with few additional learnable parameters. Experimental results demonstrate that the proposed method achieves state-of-the-art performance on three popular benchmarks with high computational efficiency.