---
title:  'Modeling Event-Pair Relations in External Knowledge Graphs for Script Reasoning'  #  Paper title, covered by ''
teser: 2021zhouacl.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2021-08-31 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yucheng Zhou, Xiubo Geng, Tao Shen, Jian Pei, Wenqiang Zhang, Daxin Jiang  # authors information
venue:  Findings of the Association for Computational Linguistics ACL-IJCNLP 2021 (CCF A) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  August  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://aclanthology.org/2021.findings-acl.403.pdf # post paper pdf link here
---

Script reasoning infers subsequent events from a given event chain, which involves the ability to understand relations between events. A human-labeled script reasoning dataset is usually of small size with limited event relations, which highlights the necessity to leverage external eventuality knowledge graphs (KG) consisting of numerous triple facts to describe the inferential relation between events. Existing methods adopt a retrieval and integration paradigm to focus merely on the graph triples that have event overlap with a script, but ignore much more supportive triples in the KG with similar inferential patterns, leading to underexploiting. To fully exploit the KG, we propose a knowledge model to learn the inferential relations between events from the whole eventuality KG and then support downstream models by directly capturing the relation between events in a script. We further present a neural script adapter to extend the knowledge model for inferring the associated relations between an event chain and a subsequent event candidate. We evaluate the proposed approach on a popular multi-choice narrative cloze task for script reasoning and achieve new state-ofthe-art accuracy, compared with baselines either incorporating external KG or not.