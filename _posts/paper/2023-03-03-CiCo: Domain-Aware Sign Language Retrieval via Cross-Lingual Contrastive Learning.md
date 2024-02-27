---
title:  'CiCo: Domain-Aware Sign Language Retrieval via Cross-Lingual Contrastive Learning'  #  Paper title, covered by ''
teser: 2023chengcvpr.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2023-03-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yiting Cheng, Fangyun Wei, Jianmin Bao, Dong Chen, Wenqiang Zhang # authors information
venue:  Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2023  # paper year, number
month:  March # paper month, full name
projectPage: None # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/FangyunWei/SLRT # If has data, post code link here, otherwise None
paperLink: https://openaccess.thecvf.com/content/CVPR2023/papers/Bao_CiCo_Domain-Aware_Sign_Language_Retrieval_via_Cross-Lingual_Contrastive_Learning_CVPR_2023_paper.pdf # post paper pdf link here
---

This work focuses on sign language retrieval--a recently proposed task for sign language understanding. Sign language retrieval consists of two sub-tasks: text-to-sign-video (T2V) retrieval and sign-video-to-text (V2T) retrieval. Different from traditional video-text retrieval, sign language videos, not only contain visual signals but also carry abundant semantic meanings by themselves due to the fact that sign languages are also natural languages. Considering this character, we formulate sign language retrieval as a cross-lingual retrieval problem as well as a video-text retrieval task. Concretely, we take into account the linguistic properties of both sign languages and natural languages, and simultaneously identify the fine-grained cross-lingual (ie, sign-to-word) mappings while contrasting the texts and the sign videos in a joint embedding space. This process is termed as cross-lingual contrastive learning. Another challenge is raised by the data scarcity issue--sign language datasets are orders of magnitude smaller in scale than that of speech recognition. We alleviate this issue by adopting a domain-agnostic sign encoder pre-trained on large-scale sign videos into the target domain via pseudo-labeling. Our framework, termed as domain-aware sign language retrieval via Cross-lingual Contrastive learning or CiCo for short, outperforms the pioneering method by large margins on various datasets, eg,+ 22.4 T2V and+ 28.0 V2T R@ 1 improvements on How2Sign dataset, and+ 13.7 T2V and+ 17.1 V2T R@ 1 improvements on PHOENIX-2014T dataset.