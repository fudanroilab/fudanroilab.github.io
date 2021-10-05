---
title:  'Adaptive Fractional Dilated Convolution Network for Image Aesthetics Assessment'  #  Paper title, covered by ''
teser: 2020chencvpr.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2020-04-06 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Qiuyu Chen, Wei Zhang, Ning Zhou, Peng Lei, Yi Xu, Yu Zheng, Jianping Fan  # authors information
venue:  IEEE International Conference on Computer Vision and Pattern Recognition (CVPR 2020) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2020 # paper year, number
month:  April  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/2004.03015v1 # post paper pdf link here
---

To leverage deep learning for image aesthetics assessment, one critical but unsolved issue is how to seamlessly incorporate the information of image aspect ratios to learn more robust models. In this paper, an adaptive fractional dilated convolution (AFDC), which is aspect-ratio-embedded, composition-preserving and parameter-free, is developed to tackle this issue natively in convolutional kernel level. Specifically, the fractional dilated kernel is adaptively constructed according to the image aspect ratios, where the interpolation of nearest two integers dilated kernels is used to cope with the misalignment of fractional sampling. Moreover, we provide a concise formulation for mini-batch training and utilize a grouping strategy to reduce computational overhead. As a result, it can be easily implemented by common deep learning libraries and plugged into popular CNN architectures in a computation-efficient manner. Our experimental results demonstrate that our proposed method achieves state-of-the-art performance on image aesthetics assessment over the AVA dataset.