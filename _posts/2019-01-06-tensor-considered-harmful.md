---
layout: post
date: "2019-01-06"
author: "Prathyush SP"
link: "http://nlp.seas.harvard.edu/NamedTensor"
category: "Resource"
title: "Tensor Considered Harmful"
tags: ""
comments: true
---
Despite its ubiquity in deep learning, Tensor is broken. It forces bad habits such as exposing private dimensions, broadcasting based on absolute position, and keeping type information in documentation. This post presents a proof-of-concept of an alternative approach, named tensors, with named dimensions. This change eliminates the need for indexing, dim arguments, einsum- style unpacking, and documentation-based coding.