---
title:  'RankDNN: Learning to Rank for Few-shot Learning'  #  Paper title, covered by ''
teser: 2022guoaaai.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-11-28 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Qianyu Guo, Hongtong Gong, Xujun Wei, Yanwei Fu, Weifeng Ge, Yizhou Yu, Wenqiang Zhang # authors information
venue:  Proceedings of the AAAI Conference on Artificial Intelligence (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  November # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/guoqianyu-alberta/RankDNN  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/pdf/2211.15320.pdf # post paper pdf link here
---

This paper introduces a new few-shot learning pipeline that casts relevance ranking for image retrieval as binary ranking relation classification. In comparison to image classification, ranking relation classification is sample efficient and domain agnostic. Besides, it provides a new perspective on few-shot learning and is complementary to state-of-the-art methods. The core component of our deep neural network is a simple MLP, which takes as input an image triplet encoded as the difference between two vector-Kronecker products,
and outputs a binary relevance ranking order. The proposed RankMLP can be built on top of any state-of-the-art feature extractors, and our entire deep neural network is called the ranking deep neural network, or RankDNN. Meanwhile, RankDNN can be flexibly fused with other post-processing methods. During the meta test, RankDNN ranks support images according to their similarity with the query samples, and each query sample is assigned the class label of its nearest neighbor. Experiments demonstrate that RankDNN can effectively improve the performance of its baselines based on a variety of backbones and it outperforms previous state-of-the-art algorithms on multiple few-shot learning benchmarks, including miniImageNet, tieredImageNet, Caltech-UCSD Birds, and CIFAR-FS. Furthermore, experiments on the cross-domain challenge demonstrate the superior transferability of RankDNN.The code is available at: https://github.com/guoqianyu-alberta/RankDNN.
