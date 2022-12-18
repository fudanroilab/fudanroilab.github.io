---
title:  'Translational relation embeddings for multi-hop knowledge base question answering'  #  Paper title, covered by ''
teser: 2022lijws.jpg
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-05-26 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Ziyan Li, Haofen Wang, Wenqiang Zhang  # authors information
venue:  Journal of Web Semantics (CCF B) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  June # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://www.sciencedirect.com/science/article/abs/pii/S1570826822000154 # post paper pdf link here
---

Multi-hop Knowledge Base Question Answering (KBQA) aims to predict answers that require multi-hop reasoning from the topic entity in the question over the Knowledge Base (KB). Relation extraction is a core step in KBQA, which extracts the relation path from the topic entity to the answer entity. Compared with single-hop questions, multi-hop ones have more complex syntactic structures to understand, and multi-hop relation paths lead to a larger search space, which makes it much more challenging to extract the correct relation paths. To tackle the above challenges, most existing relation extraction approaches focus on the semantic similarity between questions and relation paths. However, those approaches only consider the word semantics of the relation names but ignore the graph semantics inside the knowledge base. As a result, their generalization ability relying on the naming rules of the relations, making it more difficult to generalize over large knowledge bases.

To address the current limitations and take advantage of the graph semantics of relations, we propose a novel translational embedding-based relation extractor that utilizes pretrained embeddings from TransE. In particular, we treat the multi-hop relation path as a translation from the first relation to the last one in the semantic space of TransE. Then we map the question into this space under the supervision of the path embeddings. To take full advantage of the pretrained graph semantics in TransE, we propose a KBQA framework that leverages pretrained relation semantics in relation extraction and pretrained entity semantics in answer selection. Our approach achieves state-of-the-art performance on two benchmark datasets, WebQuestionSP and MetaQA, demonstrating its effectiveness on the multi-hop KBQA task.