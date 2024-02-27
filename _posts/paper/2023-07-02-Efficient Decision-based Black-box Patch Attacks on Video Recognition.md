---
title:  'Efficient Decision-based Black-box Patch Attacks on Video Recognition'  #  Paper title, covered by ''
teser: 2023jiangiccv.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2023-03-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Kaixun Jiang, Zhaoyu Chen, Hao Huang, Jiafeng Wang, Dingkang Yang, Bo Li, Yan Wang, Wenqiang Zhang # authors information
venue:  Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2023  # paper year, number
month:  July # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None # If has data, post code link here, otherwise None
paperLink: https://openaccess.thecvf.com/content/ICCV2023/papers/Jiang_Efficient_Decision-based_Black-box_Patch_Attacks_on_Video_Recognition_ICCV_2023_paper.pdf # post paper pdf link here
---

Although Deep Neural Networks (DNNs) have demonstrated excellent performance, they are vulnerable to adversarial patches that introduce perceptible and localized perturbations to the input. Generating adversarial patches on images has received much attention, while adversarial patches on videos have not been well investigated. Further, decision-based attacks, where attackers only access the predicted hard labels by querying threat models, have not been well explored on video models either, even if they are practical in real-world video recognition scenes. The absence of such studies leads to a huge gap in the robustness assessment for video models. To bridge this gap, this work first explores decision-based patch attacks on video models. We analyze that the huge parameter space brought by videos and the minimal information returned by decision-based models both greatly increase the attack difficulty and query burden. To achieve a query-efficient attack, we propose a spatial-temporal differential evolution (STDE) framework. First, STDE introduces target videos as patch textures and only adds patches on keyframes that are adaptively selected by temporal difference. Second, STDE takes minimizing the patch area as the optimization objective and adopts spatial-temporal mutation and crossover to search for the global optimum without falling into the local optimum. Experiments show STDE has demonstrated state-of-the-art performance in terms of threat, efficiency and imperceptibility. Hence, STDE has the potential to be a powerful tool for evaluating the robustness of video recognition models.