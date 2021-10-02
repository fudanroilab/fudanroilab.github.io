---
title:  'Triple Sequence Generative Adversarial Nets for Unsupervised Image Captioning'  #  Paper title, covered by ''
teser: 2021zhouicassp.gif
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2021-06-06 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Yucheng Zhou; Wei Tao; Wenqiang Zhang  # authors information
venue:  IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2021) (CCF B) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2021  # paper year, number
month:  June  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: https://ieeexplore.ieee.org/document/9414335 # post paper pdf link here
---

Labelling image-sentence is expensive and some unsupervised image captioning methods show promising results on caption generation. However, the generated captions are not very relevant to images due to the excessive dependence on the corpus. In order to overcome that drawback, we focus on the correspondence between image and sentence to construct an image caption with better mapping relation. In this paper, we present a novel triple sequence generative adversarial net including an image generator, a discriminator, and a sentence generator. The image generator is used to generate the image regions for words. Meanwhile, the sentence corpus guides the sentence generator based on the generated image regions. The discriminator judges the relevance between the words in the sentence and the generated image regions. In the experiments, we use a large number of unpaired images and sentences to train our model on the unsupervised and unpaired setting. The experimental results demonstrate that our method achieves significant improvements as compared to all baselines.