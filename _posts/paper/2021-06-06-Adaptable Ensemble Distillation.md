---
title:  'Adaptable Ensemble Distillation'  #  Paper title, covered by ''
teser: 2021wangicassp.gif
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2021-06-06 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yankai Wang, Dawei Yang, Wei Zhang, Zhe Jiang, Wenqiang Zhang  # authors information
venue:  IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2021) (CCF B) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  June  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/document/9415015 # post paper pdf link here
---

Online knowledge distillation (OKD), which simultaneously trains several peer networks to construct a powerful teacher on on-the-fly, has drawn much attention in recent years. OKD is designed to simplify the training procedure of conventional offline distillation. However, the ensemble strategy of existing OKD methods is inflexible and highly relies on random initializations. In this paper, we propose Adaptable Ensemble Distillation (AED) that inherits the merits of existing OKD methods while overcoming their major drawbacks. The novelty of our AED lies in three aspects: (1) an individual-regulated mechanism is proposed to flexibly regulate individual model and further generates an online ensemble with strong adaptability; (2) a diversity-aroused loss is designed to explicitly diversify individual models, which enhances the robustness of the ensemble; (3) an empirical distillation technique is adopted to directly promote knowledge transfer in OKD framework. Extensive experiments show that our proposed AED consistently outperforms the existing state-of-the-art OKD methods on various datasets.