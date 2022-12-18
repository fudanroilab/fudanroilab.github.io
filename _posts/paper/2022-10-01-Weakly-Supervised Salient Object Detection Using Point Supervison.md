---
title:  'Weakly-Supervised Salient Object Detection Using Point Supervison'  #  Paper title, covered by ''
teser: 2021gaoaaai.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-10-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Shuyong Gao, Wei Zhang, Yan Wang, Qianyu Guo, Chenglong Zhang, Yangji He, Wenqiang Zhang # authors information
venue:  Proceedings of the AAAI Conference on Artificial Intelligence (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  October # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://www.aaai.org/AAAI22Papers/AAAI-461.GaoS.pdf?ref=https://githubhelp.com # post paper pdf link here
---

Current state-of-the-art saliency detection models rely heavily on large datasets of accurate pixel-wise annotations, which cost a lot of time to prepare. There are some weakly supervised methods developed for alleviating the problem, such as image label, bounding box label, and scribble label, while point label still has not to be explored in this field. In this paper, we propose a new point-supervised dataset (P-DUTS) by relabeling the DUTS dataset. In P-DUTS, there is only one labeled point for each salient object. To infer the saliency map, we first design a adaptive masked flood filling algorithm to generate pseudo labels. Then we design a pointsupervised saliency detection model based on the transformer to produce the first round of saliency maps. However, we find that due to the sparseness of the label, the weakly supervised model tends to degenerate into a general foreground detection model. To address this issue, we propose a Non-Salient Suppression (NSS) method to optimize the erroneous saliency maps generated in the first round and leverage them for the second round of training. Comprehensive experiments on the five largest benchmark datasets demonstrate our method outperforms the previous state-of-the-art methods trained with the stronger supervision and even surpassed several fully supervised state-of-the-art models. The code is available.