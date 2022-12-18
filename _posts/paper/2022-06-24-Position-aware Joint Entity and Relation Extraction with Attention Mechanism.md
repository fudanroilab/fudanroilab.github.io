---
title:  'Position-aware Joint Entity and Relation Extraction with Attention Mechanism'  #  Paper title, covered by ''
teser: 2022zhangijcai.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-06-24 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Chenglong Zhang, Shuyong Gao, Haofen Wang, Wenqiang Zhang  # authors information
venue:  Proceedings of the Thirty-First International Joint Conference on Artificial Intelligence (IJCAI-22) (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  June # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://www.ijcai.org/proceedings/2022/0624.pdf # post paper pdf link here
---

Named entity recognition and relation extraction are two important core subtasks of information extraction, which aim to identify named entities and extract relations between them. In recent years, span representation methods have received a lot of attention and are widely used to extract entities and corresponding relations from plain texts. Most recent works focus on how to obtain better span representations from pre-trained encoders, but ignore the negative impact of a large number of span candidates on slowing down the model performance. In our work, we propose a joint entity and relation extraction model with an attention mechanism and position-attentive markers. The attention score of each candidate span is calculated, and most of the candidate spans with low attention scores are pruned before being fed into the span classifier, thus achieving the goal of removing the most irrelevant spans. At the same time in order to explore whether the position information can improve the performance of the model, we add position-attentive markers to the model. The experimental results show that our modelis effective. With the same pre-trained encoder, our model achieves the new state-of-the-art on standard benchmarks (ACE05, CoNLL04 and SciERC), obtaining a 4.7%-17.8% absolute improvement in relation F1.