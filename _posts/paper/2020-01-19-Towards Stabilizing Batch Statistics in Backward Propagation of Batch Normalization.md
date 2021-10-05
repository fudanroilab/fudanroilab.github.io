---
title:  'Towards Stabilizing Batch Statistics in Backward Propagation of Batch Normalization'  #  Paper title, covered by ''
teser: 2020yaniclr.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2020-01-19 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Junjie Yan, Ruosi Wan, Xiangyu Zhang, Wei Zhang, Yichen Wei, Jian Sun  # authors information
venue:  International Conference on Learning Representations (ICLR 2020) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2020 # paper year, number
month:  January  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/megvii-model/MABN # If has data, post code link here, otherwise None
paperLink:  https://openreview.net/forum?id=SkgGjRVKDS&noteId=BJeCWt3KiH # post paper pdf link here
---

Batch Normalization (BN) is one of the most widely used techniques in Deep Learning field. But its performance can awfully degrade with insufficient batch size. This weakness limits the usage of BN on many computer vision tasks like detection or segmentation, where batch size is usually small due to the constraint of memory consumption. Therefore many modified normalization techniques have been proposed, which either fail to restore the performance of BN completely, or have to introduce additional nonlinear operations in inference procedure and increase huge consumption. In this paper, we reveal that there are two extra batch statistics involved in backward propagation of BN, on which has never been well discussed before. The extra batch statistics associated with gradients also can severely affect the training of deep neural network. Based on our analysis, we propose a novel normalization method, named Moving Average Batch Normalization (MABN). MABN can completely restore the performance of vanilla BN in small batch cases, without introducing any additional nonlinear operations in inference procedure. We prove the benefits of MABN by both theoretical analysis and experiments. Our experiments demonstrate the effectiveness of MABN in multiple computer vision tasks including ImageNet and COCO. 