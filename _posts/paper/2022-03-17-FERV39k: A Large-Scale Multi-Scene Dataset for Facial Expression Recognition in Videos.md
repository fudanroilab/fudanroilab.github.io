---
title:  'FERV39k: A Large-Scale Multi-Scene Dataset for Facial Expression Recognition in Videos'  #  Paper title, covered by ''
teser: 2022wangcvpr.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-03-27 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yan Wang, Yixuan Sun, Yiwen Huang, Zhongying Liu, Shuyong Gao, Wei Zhang, Weifeng Ge, Wenqiang Zhang  # authors information
venue:  IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2022) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  March # paper month, full name
projectPage: https://github.com/wangyanckxx/FERV39k  # If has project page, link here, otherwise None
supplemental : None
data: https://github.com/wangyanckxx/FERV39k  # If has data, post data link here, otherwise None
code: https://github.com/wangyanckxx/FERV39k  # If has data, post code link here, otherwise None
paperLink: https://openaccess.thecvf.com/content/CVPR2022/papers/Wang_FERV39k_A_Large-Scale_Multi-Scene_Dataset_for_Facial_Expression_Recognition_in_CVPR_2022_paper.pdf # post paper pdf link here
---

Current benchmarks for facial expression recognition (FER) mainly focus on static images, while there are limited datasets for FER in videos. It is still ambiguous to evaluate whether performances of existing methods remain satisfactory in real-world application-oriented scenes. For example, the" Happy" expression with high intensity in Talk-Show is more discriminating than the same expression with low intensity in Official-Event. To fill this gap, we build a large-scale multi-scene dataset, coined as FERV39k. We analyze the important ingredients of constructing such a novel dataset in three aspects:(1) multi-scene hierarchy and expression class,(2) generation of candidate video clips,(3) trusted manual labelling process. Based on these guidelines, we select 4 scenarios subdivided into 22 scenes, annotate 86k samples automatically obtained from 4k videos based on the well-designed workflow, and finally build 38,935 video clips labeled with 7 classic expressions. Experiment benchmarks on four kinds of baseline frameworks were also provided and further analysis on their performance across different scenes and some challenges for future research were given. Besides, we systematically investigate key components of DFER by ablation studies. The baseline framework and our project are available on https://github.com/wangyanckxx/FERV39k.