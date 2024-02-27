---
title:  'A large-scale empirical study of commit message generation: models, datasets and evaluation'  #  Paper title, covered by ''
teser: 2022taoese.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2022-12-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Wei Tao, Yanlin Wang, Ensheng Shi, Lun Du, Shi Han, Hongyu Zhang, Dongmei Zhang, Wenqiang Zhang # authors information
venue:  Empirical Software Engineering (SCI Q2) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2022  # paper year, number
month:  December # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: https://anonymous.4open.science/r/CommitMessageEmpirical/README.md  # If has data, post code link here, otherwise None
paperLink: https://link.springer.com/article/10.1007/s10664-022-10219-1 # post paper pdf link here
---

Commit messages are natural language descriptions of code changes, which are important for program understanding and maintenance. However, writing commit messages manually is time-consuming and laborious, especially when the code is updated frequently. Various approaches utilizing generation or retrieval techniques have been proposed to automatically generate commit messages. To achieve a better understanding of how the existing approaches perform in solving this problem, this paper conducts a systematic and in-depth analysis of the state-of-the-art models and datasets. We find that: (1) Different variants of the BLEU metric used in previous works affect the evaluation. (2) Most datasets are crawled only from Java repositories while repositories in other programming languages are not sufficiently explored. (3) Dataset splitting strategies can influence the performance of existing models by a large margin. (4) For pre-trained models, fune-tuning with different multi-programming-language combinations can influence their performance. Based on these findings, we collect a large-scale, information-rich, M ulti-language C ommit M essage D ataset (MCMD). Using MCMD, we conduct extensive experiments under different experiment settings including splitting strategies and multi-programming-language combinations. Furthermore, we provide suggestions for comprehensively evaluating commit message generation models and discuss possible future research directions. We believe our work can help practitioners and researchers better evaluate and select models for automatic commit message generation.