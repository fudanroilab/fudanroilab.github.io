---
title:  'MHKD-MVQA: Multimodal Hierarchical Knowledge Distillation for Medical Visual Question Answering'  #  Paper title, covered by ''
teser: 2022wangbibm.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-12-06 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Jianfeng Wang, Shuokang Huang, Huifang Du, Yu Qin, Haofen Wang, Wenqiang Zhang # authors information
venue:  2022 IEEE International Conference on Bioinformatics and Biomedicine (BIBM) (CCF B) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  December # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/abstract/document/9995473/ # post paper pdf link here
---

Medical Visual Question Answering (VQA) has emerged as a promising solution to enhance clinic-decision making and patient interactions. Given a medical image and a corresponding question, medical VQA aims to predict an informative answer by reasoning the visual and textual information. However, datasets with limited samples circumscribe the generalization of medical VQA, reducing its accuracy when applied to unseen medical samples. Existing works tried to solve this problem with meta-learning or self-supervised learning but still failed to achieve satisfactory performance on medical VQA with insufficient samples. To address this problem, we propose multimodal hierarchical knowledge distillation for medical VQA (MHKD-MVQA). In the primary novelty of MHKD-MVQA, we distill knowledge from not only the output but also the intermediate layers, which leverages the knowledge from limited samples to a greater extent. Meanwhile, medical images and questions are embedded in a shared latent space, enabling our model to tackle multimodal samples. We evaluate our model on two medical VQA datasets, VQA-MED 2019 and VQA-RAD, where MHKD-MVQA achieves state-of-the-art performance and outperforms baselines by 3.6% and 1.6%, respectively. The extensive experiments also highlight the generalization of knowledge distillation by analyzing the class activation maps on medical images concerning specific questions.