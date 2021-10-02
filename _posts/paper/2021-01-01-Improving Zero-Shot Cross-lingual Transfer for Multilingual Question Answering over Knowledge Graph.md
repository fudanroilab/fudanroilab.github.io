---
title:  'Improving Zero-Shot Cross-lingual Transfer for Multilingual Question Answering over Knowledge Graph'  #  Paper title, covered by ''
teser: 2021zhounaacl.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2021-01-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yucheng Zhou，Xiubo Geng，Tao Shen，Wenqiang Zhang，Daxin Jiang  # authors information
venue:  Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics (NAACL 2021) (CCF C) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  January  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://aclanthology.org/2021.naacl-main.465/ # post paper pdf link here
---

Multilingual question answering over knowledge graph (KGQA) aims to derive answers from a knowledge graph (KG) for questions in multiple languages. To be widely applicable, we focus on its zero-shot transfer setting. That is, we can only access training data in a high-resource language, while need to answer multilingual questions without any labeled data in target languages. A straightforward approach is resorting to pre-trained multilingual models (e.g., mBERT) for cross-lingual transfer, but there is a still significant gap of KGQA performance between source and target languages. In this paper, we exploit unsupervised bilingual lexicon induction (BLI) to map training questions in source language into those in target language as augmented training data, which circumvents language inconsistency between training and inference. Furthermore, we propose an adversarial learning strategy to alleviate syntax-disorder of the augmented data, making the model incline to both language- and syntax-independence. Consequently, our model narrows the gap in zero-shot cross-lingual transfer. Experiments on two multilingual KGQA datasets with 11 zero-resource languages verify its effectiveness.