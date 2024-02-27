---
title:  'Correspondence Transformers With Asymmetric Feature Learning and Matching Flow Super-Resolution'  #  Paper title, covered by ''
teser: 2023suncvpr2.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2023-03-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yixuan Sun, Dongyang Zhao, Zhangyue Yin, Yiwen Huang, Tao Gui, Wenqiang Zhang, Weifeng Ge # authors information
venue:  Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2023  # paper year, number
month:  March # paper month, full name
projectPage: None # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/YXSUNMADMAX/ACTR # If has data, post code link here, otherwise None
paperLink: https://openaccess.thecvf.com/content/CVPR2023/papers/Sun_Correspondence_Transformers_With_Asymmetric_Feature_Learning_and_Matching_Flow_Super-Resolution_CVPR_2023_paper.pdf # post paper pdf link here
---

This paper solves the problem of learning dense visual correspondences between different object instances of the same category with only sparse annotations. We decompose this pixel-level semantic matching problem into two easier ones:(i) First, local feature descriptors of source and target images need to be mapped into shared semantic spaces to get coarse matching flows.(ii) Second, matching flows in low resolution should be refined to generate accurate point-to-point matching results. We propose asymmetric feature learning and matching flow super-resolution based on vision transformers to solve the above problems. The asymmetric feature learning module exploits a biased cross-attention mechanism to encode token features of source images with their target counterparts. Then matching flow in low resolutions is enhanced by a super-resolution network to get accurate correspondences. Our pipeline is built upon vision transformers and can be trained in an end-to-end manner. Extensive experimental results on several popular benchmarks, such as PF-PASCAL, PF-WILLOW, and SPair-71K, demonstrate that the proposed method can catch subtle semantic differences in pixels efficiently.