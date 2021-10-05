---
title:  'Points as Queries: Weakly Semi-supervised Object Detection by Points'  #  Paper title, covered by ''
teser: 2021chencvpr.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2021-04-15 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Liangyu Chen, Tong Yang, Xiangyu Zhang, Wei Zhang, Jian Sun  # authors information
venue:  IEEE International Conference on Computer Vision and Pattern Recognition (CVPR 2021) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  April  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/2104.07434 # post paper pdf link here
---

We propose a novel point annotated setting for the weakly semi-supervised object detection task, in which the dataset comprises small fully annotated images and large weakly annotated images by points. It achieves a balance between tremendous annotation burden and detection performance. Based on this setting, we analyze existing detectors and find that these detectors have difficulty in fully exploiting the power of the annotated points. To solve this, we introduce a new detector, Point DETR, which extends DETR by adding a point encoder. Extensive experiments conducted on MS-COCO dataset in various data settings show the effectiveness of our method. In particular, when using 20% fully labeled data from COCO, our detector achieves a promising performance, 33.3 AP, which outperforms a strong baseline (FCOS) by 2.0 AP, and we demonstrate the point annotations bring over 10 points in various AR metrics.