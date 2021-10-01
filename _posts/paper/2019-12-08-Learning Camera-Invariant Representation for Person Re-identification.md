---
title:  'Learning Camera-Invariant Representation for Person Re-identification'  #  Paper title, covered by ''
teser: qin2019.png
type:   paper
pro_type: Person Re-identification
layout: post  #  Do not change this
date:   2019-12-08 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Shizheng Qin, Kangzheng Gu, Lecheng Wang, Lizhe Qi, Wenqiang Zhang  # authors information
venue:  International Conference on Artificial Neural Networks Munich (ICANN 2019) (CCF C) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2019  # paper year, number
month:  September  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: None  # If has data, post data link here, otherwise None
code: None  # If has data, post code link here, otherwise None
paperLink: None  # post paper pdf link here
---

Person re-identification (re-ID) problem aims to retrieve a person from an image gallery captured across multiple cameras. However, images of the same identity have variations due to the change in camera views. So learning a camera-invariant representation is one objective of re-identification. In this paper, we propose a camera-style transfer model for generating images, and a fake triplet loss for training the person feature embedding model. We train a StarGAN, a kind of generative adversarial networks, as our transfer model, which can transfer the style of an image from one camera to multiple different camera-styles by a generator network. So the image set is expanded with style-transferred images. However, style transferring yields image distortion, which misleads the training of feature embedding model. To overcome the influence of image distortion, we consider the gap between fake and real images, then we propose a fake triplet loss to capture the camera-invariant information of fake images. We do a series of experiments on the Market-1501, DukeMTMC-reID, and CUHK03 datasets, and show the effectiveness of our methods.