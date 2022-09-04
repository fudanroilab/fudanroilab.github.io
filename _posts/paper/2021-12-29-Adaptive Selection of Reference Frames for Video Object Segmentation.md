---
title:  'Adaptive Selection of Reference Frames for Video Object Segmentation'  #  Paper title, covered by ''
teser: 2021hongtip.gif
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2021-12-29 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Lingyi Hong, Wei Zhang, Liangyu Chen, Wenqiang Zhang, Jianping Fan  # authors information
venue:  IEEE Transactions on Image Processing  (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  December  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/abstract/document/9665289/ # post paper pdf link here
---

Video object segmentation is a challenging task in computer vision because the appearances of target objects might change drastically along the time in the video. To solve this problem, space-time memory (STM) networks are exploited to make use of the information from all the intermediate frames between the first frame and the current frame in the video. However, fully using the information from all the memory frames may make STM not practical for long videos. To overcome this issue, a novel method is developed in this paper to select the reference frames adaptively. First, an adaptive selection criterion is introduced to choose the reference frames with similar appearance and precise mask estimation, which can efficiently capture the rich information of the target object and overcome the challenges of appearance changes, occlusion, and model drift. Secondly, bi-matching (bi-scale and bi-direction) is conducted to obtain more robust correlations for objects of various scales and prevents multiple similar objects in the current frame from being mismatched with the same target object in the reference frame. Thirdly, a novel edge refinement technique is designed by using an edge detection network to obtain smooth edges from the outputs of edge confidence maps, where the edge confidence is quantized into ten sub-intervals to generate smooth edges step by step. Experimental results on the challenging benchmark datasets DAVIS-2016, DAVIS-2017, YouTube-VOS, and a Long-Video dataset have demonstrated the effectiveness of our proposed approach to video object segmentation.