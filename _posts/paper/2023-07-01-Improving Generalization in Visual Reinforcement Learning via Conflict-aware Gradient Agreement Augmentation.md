---
title:  'Improving Generalization in Visual Reinforcement Learning via Conflict-aware Gradient Agreement Augmentation'  #  Paper title, covered by ''
teser: 2023liuiccv.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2023-07-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Siao Liu, Zhaoyu Chen, Yang Liu, Yuzheng Wang, Dingkang Yang, Zhile Zhao, Ziqing Zhou, Xie Yi, Wei Li, Wenqiang Zhang, Zhongxue Gan # authors information
venue:  Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2023  # paper year, number
month:  July # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None # If has data, post code link here, otherwise None
paperLink: https://openaccess.thecvf.com/content/ICCV2023/papers/Liu_Improving_Generalization_in_Visual_Reinforcement_Learning_via_Conflict-aware_Gradient_Agreement_ICCV_2023_paper.pdf # post paper pdf link here
---

Learning a policy with great generalization to unseen environments remains challenging but critical in visual reinforcement learning. Despite the success of augmentation combination in the supervised learning generalization, naively applying it to visual RL algorithms may damage the training efficiency, suffering from serve performance degradation. In this paper, we first conduct qualitative analysis and illuminate the main causes:(i) high-variance gradient magnitudes and (ii) gradient conflicts existed in various augmentation methods. To alleviate these issues, we propose a general policy gradient optimization framework, named Conflict-aware Gradient Agreement Augmentation (CG2A), and better integrate augmentation combination into visual RL algorithms to address the generalization bias. In particular, CG2A develops a Gradient Agreement Solver to adaptively balance the varying gradient magnitudes, and introduces a Soft Gradient Surgery strategy to alleviate the gradient conflicts. Extensive experiments demonstrate that CG2A significantly improves the generalization performance and sample efficiency of visual RL algorithms.