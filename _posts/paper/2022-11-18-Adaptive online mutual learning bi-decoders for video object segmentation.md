---
title:  'Adaptive online mutual learning bi-decoders for video object segmentation'  #  Paper title, covered by ''
teser: 2022guotip.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-11-18 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Pinxue Guo, Wei Zhang, Xiaoqiang Li, Wenqiang Zhang # authors information
venue:  IEEE Transactions on Image Processing (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  November # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/abstract/document/9942927 # post paper pdf link here
---

One of the major challenges facing video object segmentation (VOS) is the gap between the training and test datasets due to unseen category in test set, as well as object appearance change over time in the video sequence. To overcome such challenges, an adaptive online framework for VOS is developed with bi-decoders mutual learning. We learn object representation per pixel with bi-level attention features in addition to CNN features, and then feed them into mutual learning bi-decoders whose outputs are further fused to obtain the final segmentation result. We design an adaptive online learning mechanism via a deviation correcting trigger such that bi-decoders online mutual learning will be activated when the previous frame is segmented well meanwhile the current frame is segmented relatively worse. Knowledge distillation from the well segmented previous frames, along with mutual learning between bi-decoders, improves generalization ability and robustness of VOS model. Thus, the proposed model adapts to the challenging scenarios including unseen categories, object deformation, and appearance variation during inference. We extensively evaluate our model on widely-used VOS benchmarks including DAVIS-2016, DAVIS-2017, YouTubeVOS-2018, YouTubeVOS-2019, and UVO. Experimental results demonstrate the superiority of the proposed model over state-of-the-art methods.