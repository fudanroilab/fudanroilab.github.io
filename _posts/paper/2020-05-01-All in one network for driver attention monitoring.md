---
title:  'All in One Network for Driver Attention Monitoring'  #  Paper title, covered by ''
teser: 2021yangicassp.png
type:   paper
pro_type: Visual Place Recognition
layout: post  #  Do not change this
date:   2020-05-01 11:59:59 +0800  # paper pub data, only change year and month according to this format
author: Dawei Yang, Xinlei Li, Xiaotian Dai, Rui Zhang, Lizhe Qi, Wenqiang Zhang, Zhe Jiang  # authors information
venue:  IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2020) (CCF B) # Where it be, ICCV and CVPR remove IEEE Conference on,
year:   2020  # paper year, number
month:  May  # paper month, full name
projectPage: None  # If has project page, link here, otherwise None
supplemental : None
data: https://github.com/FDUXilly/FDUDrivers  # If has data, post data link here, otherwise None
code: None # If has data, post code link here, otherwise None
paperLink: https://eprints.whiterose.ac.uk/158675/1/icassp2020_yang.pdf # post paper pdf link here
---

Nowadays, driver drowsiness and driver distraction is considered as a major risk for fatal road accidents around the world. As a result, driver monitoring identifying is emerging as an essential function of automotive safety systems. Its basic features include head pose, gaze direction, yawning and eye state analysis. However, existing work
has investigated algorithms to detect these tasks separately and was usually conducted under laboratory environments. To address this problem, we propose a multi-task learning CNN framework which simultaneously solve these tasks. The network is implemented by sharing common features and parameters of highly related tasks. Moreover, we propose Dual-Loss Block to decompose the pose estimation task into pose classification and coarse-to-fine regression and Objectcentric Aware Block to reduce orientation estimation errors. Thus, with such novel designs, our model not only achieves SOA results but also reduces the complexity of integrating into automotive safety systems. It runs at 10 fps on vehicle embedded systems which marks a momentous step for this field. More importantly, to facilitate other researchers, we publish our dataset FDUDrivers which contains 20000 images of 100 different drivers and covers various real driving environments. FDUDrivers might be the first comprehensive dataset regarding driver attention monitoring.