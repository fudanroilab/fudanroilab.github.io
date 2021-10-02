---
title:  'GraphFPN: Graph Feature Pyramid Network for Object Detection'  #  Paper title, covered by ''
teser: GraphFPN.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2021-08-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Gangming Zhao, Weifeng Ge, Yizhou Yu  # authors information
venue:  IEEE International Conference on Computer Vision 2021 (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  August  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/2108.00580  # post paper pdf link here
---

Feature pyramids have been proven powerful in image understanding tasks that require multi-scale features. State-of-the-art methods for multi-scale feature learning focus on performing feature interactions across space and scales using neural networks with a fixed topology. In this paper, we propose graph feature pyramid networks that are capable of adapting their topological structures to varying intrinsic image structures and supporting simultaneous feature interactions across all scales. We first define an image-specific superpixel hierarchy for each input image to represent its intrinsic image structures. The graph feature pyramid network inherits its structure from this superpixel hierarchy. Contextual and hierarchical layers are designed to achieve feature interactions within the same scale and across different scales. To make these layers more powerful, we introduce two types of local channel attention for graph neural networks by generalizing global channel attention for convolutional neural networks. The proposed graph feature pyramid network can enhance the multiscale features from a convolutional feature pyramid network. We evaluate our graph feature pyramid network in the object detection task by integrating it into the Faster R-CNN algorithm. The modified algorithm outperforms not only previous state-of-the-art feature pyramid-based methods with a clear margin but also other popular detection methods on both MS-COCO 2017 validation and test datasets.