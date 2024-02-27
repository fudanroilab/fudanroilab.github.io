---
title:  'MISC210K: A Large-Scale Dataset for Multi-Instance Semantic Correspondence'  #  Paper title, covered by ''
teser: 2023suncvpr.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2023-03-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yixuan Sun, Yiwen Huang, Haijing Guo, Yuzhou Zhao, Runmin Wu, Yizhou Yu, Weifeng Ge, Wenqiang Zhang # authors information
venue:  Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2023  # paper year, number
month:  March # paper month, full name
projectPage: https://github.com/YXSUNMADMAX/MISC210K  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/YXSUNMADMAX/MISC210K # If has data, post code link here, otherwise None
paperLink: https://openaccess.thecvf.com/content/CVPR2023/papers/Sun_MISC210K_A_Large-Scale_Dataset_for_Multi-Instance_Semantic_Correspondence_CVPR_2023_paper.pdf # post paper pdf link here
---

Semantic correspondence have built up a new way for object recognition. However current single-object matching schema can be hard for discovering commonalities for a category and far from the real-world recognition tasks. To fill this gap, we design the multi-instance semantic correspondence task which aims at constructing the correspondence between multiple objects in an image pair. To support this task, we build a multi-instance semantic correspondence (MISC) dataset from COCO Detection 2017 task called MISC210K. We construct our dataset as three steps:(1) category selection and data cleaning;(2) keypoint design based on 3D models and object description rules;(3) human-machine collaborative annotation. Following these steps, we select 34 classes of objects with 4,812 challenging images annotated via a well designed semi-automatic workflow, and finally acquire 218,179 image pairs with instance masks and instance-level keypoint pairs annotated. We design a dual-path collaborative learning pipeline to train instance-level co-segmentation task and fine-grained level correspondence task together. Benchmark evaluation and further ablation results with detailed analysis are provided with three future directions proposed.