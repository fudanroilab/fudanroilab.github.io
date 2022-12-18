---
title:  'Shape Matters: Deformable Patch Attack'  #  Paper title, covered by ''
teser: 2022cheneccv.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-10-19 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Zhaoyu Chen, Bo Li, Shuang Wu, Jianghe Xu, Shouhong Ding, Wenqiang Zhang # authors information
venue:  European conference on computer vision (ECCV 2022) (CCF B) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  October # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/Omenzychen/Deformable_Patch_Representation  # If has data, post code link here, otherwise None
paperLink: https://www.ecva.net/papers/eccv_2022/papers_ECCV/papers/136640522.pdf # post paper pdf link here
---

Though deep neural networks (DNNs) have demonstrated excellent performance in computer vision, they are susceptible and vulnerable to carefully crafted adversarial examples which can mislead DNNs to incorrect outputs. Patch attack is one of the most threatening forms, which has the potential to threaten the security of real-world systems. Previous work always assumes patches to have fixed shapes, such as circles or rectangles, and it does not consider the shape of patches as a factor in patch attacks. To explore this issue, we propose a novel Deformable Patch Representation (DPR) that can harness the geometric structure of triangles to support the differentiable mapping between contour modeling and masks. Moreover, we introduce a joint optimization algorithm, named Deformable Adversarial Patch (DAPatch), which allows simultaneous and efficient optimization of shape and texture to enhance attack performance. We show that even with a small area, a particular shape can improve attack performance. Therefore, DAPatch achieves state-of-the-art attack performance by deforming shapes on GTSRB and ILSVRC2012 across various network architectures, and the generated patches can be threatening in the real world.