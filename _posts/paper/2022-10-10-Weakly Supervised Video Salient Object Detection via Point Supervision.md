---
title:  'Weakly Supervised Video Salient Object Detection via Point Supervision'  #  Paper title, covered by ''
teser: 2022gaomm.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-10-10 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Shuyong Gao, Haozhe Xing, Wei Zhang, Yan Wang, Qianyu Guo, Wenqiang Zhang # authors information
venue:  Proceedings of the 30th ACM International Conference on Multimedia (ACMMM 2022) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  October # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/2207.07269 # post paper pdf link here
---

Video salient object detection models trained on pixel-wise dense annotation have achieved excellent performance, yet obtaining pixel-by-pixel annotated datasets is laborious. Several works attempt to use scribble annotations to mitigate this problem, but point supervision as a more labor-saving annotation method (even the most labor-saving method among manual annotation methods for dense prediction), has not been explored. In this paper, we propose a strong baseline model based on point supervision. To infer saliency maps with temporal information, we mine inter-frame complementary information from short-term and long-term perspectives, respectively. Specifically, we propose a hybrid token attention module, which mixes optical flow and image information from orthogonal directions, adaptively highlighting critical optical flow information (channel dimension) and critical token information (spatial dimension). To exploit long-term cues, we develop the Long-term Cross-Frame Attention module (LCFA), which assists the current frame in inferring salient objects based on multi-frame tokens. Furthermore, we label two point-supervised datasets, P-DAVIS and P-DAVSOD, by relabeling the DAVIS and the DAVSOD dataset. Experiments on the six benchmark datasets illustrate our method outperforms the previous state-of-the-art weakly supervised methods and even is comparable with some fully supervised approaches. Source code and datasets are available.