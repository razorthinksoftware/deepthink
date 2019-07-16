---
layout: post
date: "2019-01-30"
author: "Prathyush SP"
link: "https://arxiv.org/abs/1810.12715"
type: "Paper"
title: "Neural networks can be vulnerable to adversarial noise - Demonstrating the remarkable effectiveness of interval bound propagation in training provably robust image classifiers"
tags: ""
comments: true
---
Recent work has shown that it is possible to train deep neural networks that are verifiably robust to norm-bounded adversarial perturbations. Most of these methods are based on minimizing an upper bound on the worst-case loss over all possible adversarial perturbations. While these techniques show promise, they remain hard to scale to larger networks. Through a comprehensive analysis, we show how a careful implementation of a simple bounding technique, interval bound propagation (IBP), can be exploited to train verifiably robust neural networks that beat the state-of-the-art in verified accuracy. While the upper bound computed by IBP can be quite weak for general networks, we demonstrate that an appropriate loss and choice of hyper-parameters allows the network to adapt such that the IBP bound is tight. This results in a fast and stable learning algorithm that outperforms more sophisticated methods and achieves state-of-the-art results on MNIST, CIFAR-10 and SVHN. It also allows us to obtain the first verifiably robust model on a downscaled version of ImageNet.