---
title:  'Hierarchical Visual Categories Modeling: A Joint Representation Learning and Density Estimation Framework for Out-of-Distribution Detection'  #  Paper title, covered by ''
teser: 2023liiccv.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2023-07-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jinglun Li, Xinyu Zhou, Pinxue Guo, Yixuan Sun, Yiwen Huang, Weifeng Ge, Wenqiang Zhang # authors information
venue:  Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2023  # paper year, number
month:  July # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None # If has data, post code link here, otherwise None
paperLink: https://openaccess.thecvf.com/content/ICCV2023/papers/Li_Hierarchical_Visual_Categories_Modeling_A_Joint_Representation_Learning_and_Density_ICCV_2023_paper.pdf # post paper pdf link here
---

Detecting out-of-distribution inputs for visual recognition models has become critical in safe deep learning. This paper proposes a novel hierarchical visual category modeling scheme to separate out-of-distribution data from in-distribution data through joint representation learning and statistical modeling. We learn a mixture of Gaussian models for each in-distribution category. There are many Gaussian mixture models to model different visual categories. With these Gaussian models, we design an in-distribution score function by aggregating multiple Mahalanobis-based metrics. We don't use any auxiliary outlier data as training samples, which may hurt the generalization ability of out-of-distribution detection algorithms. We split the ImageNet1k dataset into ten folds randomly. We use one fold as the in-distribution dataset and the others as out-of-distribution datasets to evaluate the proposed method. We also conduct experiments on seven popular benchmarks, including CIFAR, iNaturalist, SUN, Places, Textures, ImageNet-O, and OpenImage-O. Extensive experiments indicate that the proposed method outperforms state-of-the-art algorithms clearly. Meanwhile, we find that our visual representation has a competitive performance when compared with features learned by classical methods. These results demonstrate that the proposed method hasn't weakened the discriminative ability of visual recognition models and keeps high efficiency in detecting out-of-distribution samples.