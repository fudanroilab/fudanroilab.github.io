---
title:  'Attribute Surrogates Learning and Spectral Tokens Pooling in Transformers for Few-shot Learning'  #  Paper title, covered by ''
teser: 2022hecvpr.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-03-27 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yangji He, Weihan Liang, Dongyang Zhao, Hong-Yu Zhou, Weifeng Ge, Yizhou Yu, Wenqiang Zhang  # authors information
venue:  IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2022) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  March # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/StomachCold/HCTransformers  # If has data, post code link here, otherwise None
paperLink: https://openaccess.thecvf.com/content/CVPR2022/papers/He_Attribute_Surrogates_Learning_and_Spectral_Tokens_Pooling_in_Transformers_for_CVPR_2022_paper.pdf # post paper pdf link here
---

This paper presents new hierarchically cascaded transformers that can improve data efficiency through attribute surrogates learning and spectral tokens pooling. Vision transformers have recently been thought of as a promising alternative to convolutional neural networks for visual recognition. But when there is no sufficient data, it gets stuck in overfitting and shows inferior performance. To improve data efficiency, we propose hierarchically cascaded transformers that exploit intrinsic image structures through spectral tokens pooling and optimize the learnable parameters through latent attribute surrogates. The intrinsic image structure is utilized to reduce the ambiguity between foreground content and background noise by spectral tokens pooling. And the attribute surrogate learning scheme is designed to benefit from the rich visual information in image-label pairs instead of simple visual concepts assigned by their labels. Our Hierarchically Cascaded Transformers, called HCTransformers, is built upon a self-supervised learning framework DINO and is tested on several popular few-shot learning benchmarks. In the inductive setting, HCTransformers surpass the DINO baseline by a large margin of 9.7% 5-way 1-shot accuracy and 9.17% 5-way 5-shot accuracy on mini-ImageNet, which demonstrates HCTransformers are efficient to extract discriminative features. Also, HCTransformers show clear advantages over SOTA few-shot classification methods in both 5-way 1-shot and 5-way 5-shot settings on four popular benchmark datasets, including mini-ImageNet, tiered-ImageNet, FC100, and CIFAR-FS.