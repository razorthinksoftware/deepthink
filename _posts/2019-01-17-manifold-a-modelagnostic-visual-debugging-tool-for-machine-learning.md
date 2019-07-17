---
layout: post
date: "2019-01-17"
author: "Prathyush SP"
link: "https://eng.uber.com/manifold/?amp"
type: "Tool"
title: "Manifold: A Model-Agnostic Visual Debugging Tool for Machine Learning"
tags: ""
comments: true
---
To make the model iteration process more informed and actionable, we developed Manifold, Uber’s in-house model-agnostic visualization tool for ML performance diagnosis and model debugging. Taking advantage of visual analytics techniques, Manifold allows ML practitioners to look beyond overall summary metrics to detect which subset of data a model is inaccurately predicting. Manifold also explains the potential cause of poor model performance by surfacing the feature distribution difference between better and worse-performing subsets of data. Moreover, it can display how several candidate models have different prediction accuracies for each subset of data, providing justification for advanced treatments such as model ensembling