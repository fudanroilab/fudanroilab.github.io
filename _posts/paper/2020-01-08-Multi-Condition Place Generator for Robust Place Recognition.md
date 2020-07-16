---
title:  'Multi-Condition Place Generator for Robust Place Recognition'  #  Paper title, covered by ''
teser: cheng2020.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2020-01-08 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yiting Cheng, Yankai Wang, Lizhe Qi, Wenqiang Zhang  # authors information
venue:  International Conference on Multimedia Modeling (MMM 2019)  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2020  # paper year, number
month:  January  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://link.springer.com/chapter/10.1007%2F978-3-030-37731-1_16  # post paper pdf link here
---

As an image retrieval task, visual place recognition (VPR) encounters two technical challenges: appearance variations resulted from external environment changes and the lack of cross-domain paired training data. To overcome these challenges, multi-condition place generator (MPG) is introduced for data generation. The objective of MPG is two-fold, (1) synthesizing realistic place samples corresponding to multiple conditions; (2) preserving the place identity information during the generation procedure. While MPG smooths the appearance disparities under various conditions, it also suffers image distortion. For this reason, we propose the relative quality based triplet (RQT) loss by reshaping the standard triplet loss such that it down-weights the loss assigned to low-quality images. By taking advantage of the innovations mentioned above, a condition-invariant VPR model is trained without the labeled training data. Comprehensive experiments show that our method outperforms state-of-the-art algorithms by a large margin on several challenging benchmarks.