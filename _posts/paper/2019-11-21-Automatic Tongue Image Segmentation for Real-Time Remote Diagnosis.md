---
title:  'Automatic Tongue Image Segmentation for Real-Time Remote Diagnosis'  #  Paper title, covered by ''
teser: li2019.png # A picture about this paper
type: paper #  Do not change this
pro_type: Segmentation #  Research Interests or Projects
layout: post  #  Do not change this
date:   2019-11-21 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Xinlei Li, Dawei Yang, Yan Wang, Shuai Yang, Lizhe Qi, Fufeng Li, Zhongxue Gan, Wenqiang Zhang  # authors information
venue:  IEEE International Conference on Bioinformatics and Biomedicine (IEEE BIBM 2019) (CCF B) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2019  # paper year, number
month:  November  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/document/8982947  # post paper pdf link here
---

Tongue diagnosis, one of the essential diagnostic methods of Traditional Chinese Medicine (TCM), is considered an ideal candidate for remote diagnosis methods because of its convenience and noninvasiveness. However, the trade-off between accuracy and efficiency and the variation of tongue images pose great challenges in real-time tongue image segmentation. To remedy these problems, in this paper, a light weight architecture based on the encoder-decoder structure is proposed. The tongue image feature extraction (TIFE) module is designed to generate features with larger receptive fields without sacrificing spatial resolution. The context module is used to increase the performance by aggregating multi-scale contextual information. The decoder is designed as a simple yet efficient feature upsampling module to fuse different depth features and refine the segmentation results along tongue boundaries. The loss module is proposed to deal with misclassifications causing by class imbalance. A new tongue image dataset (FDU/SHUTCM) is constructed for model training and testing, which contains 5,600 tongue images and their corresponding high quality masks. We demonstrate the effectiveness of the proposed model on BioHit, PolyU/HIT, and our datasets, achieving the performance of 99.15%, 95.69%, and 99.03% IoU accuracy, respectively. Segmentation of a 513×513 image takes 165 ms on CPU.