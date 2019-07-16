---
layout: post
date: "2019-02-15"
author: "Prathyush SP"
link: "https://ai.googleblog.com/2019/02/introducing-planet-deep-planning.html"
type: "Paper"
title: "Introducing PlaNet: A Deep Planning Network for Reinforcement Learning"
tags: ""
comments: true
---
Research into how artificial agents can improve their decisions over time is progressing rapidly via reinforcement learning (RL). For this technique, an agent observes a stream of sensory inputs (e.g. camera images) while choosing actions (e.g. motor commands), and sometimes receives a reward for achieving a specified goal. Model-free approaches to RL aim to directly predict good actions from the sensory observations, enabling DeepMind's DQN to play Atari and other agents to control robots. However, this blackbox approach often requires several weeks of simulated interaction to learn through trial and error, limiting its usefulness in practice.