---
title:  'Dual Path Learning for Domain Adaptation of Semantic Segmentation'  #  Paper title, covered by ''
teser: cheng2021.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2021-08-13 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yiting Cheng, Fangyun Wei, Jianmin Bao, Dong Chen, Fang Wen, Wenqiang Zhang  # authors information
venue:  IEEE International Conference on Computer Vision 2021 (CCF A)  # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  August  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://github.com/royee182/DPL  # If has data, post code link here, otherwise None
paperLink: https://arxiv.org/abs/2108.06337 # post paper pdf link here
---

Domain adaptation for semantic segmentation enables to alleviate the need for large-scale pixel-wise annotations. Recently, self-supervised learning (SSL) with a combination of image-to-image translation shows great effectiveness in adaptive segmentation. The most common practice is to perform SSL along with image translation to well align a single domain (the source or target). However, in this single-domain paradigm, unavoidable visual inconsistency raised by image translation may affect subsequent learning. In this paper, based on the observation that domain adaptation frameworks performed in the source and target domain are almost complementary in terms of image translation and SSL, we propose a novel dual path learning (DPL) framework to alleviate visual inconsistency. Concretely, DPL contains two complementary and interactive single-domain adaptation pipelines aligned in source and target domain respectively. The inference of DPL is extremely simple, only one segmentation model in the target domain is employed. Novel technologies such as dual path image translation and dual path adaptive segmentation are proposed to make two paths promote each other in an interactive manner. Experiments on GTA5→Cityscapes and SYNTHIA→Cityscapes scenarios demonstrate the superiority of our DPL model over the state-of-the-art methods.