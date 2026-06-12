---
title: The Hidden Cost of AI Engineering
description: AI is powerful - but is it all sparkles?
date: 2023-06-12
---

> Most AI demos look magical. The first production invoice looks usually horrifying.

I came across this quote somewhere and it has just stuck with me ever since. I guess it is one of those things that you see somewhere and it never leaves your mind.

But, this is a gap. A gap between what AI feels like and what it usually costs to operate AI at scale.

**November 30 2022**

Does this date ring a bell? It probably does, because that's when the world first discovered a product known as ChatGPT and the world devoured on it. It raced to a 100 million users in a matter of two months.

Since then, the whole world has been adapting to AI. First, it was the chatbots, then came the agents and agentic workflows to the orchestrator-worker model of today where a frontier model acts as a manager and delegates tasks to sub agents that run on cheaper models.

While this was happening businesses started adapting to AI rapidly.

In my opinion, we started with AI as a feature - a welcome addition to the product but now it has become the **core infrastructure**.

## A prompt is no longer a prompt.

It is now

- **compute** : _Someone is running the model_
- **money**: _Someone is paying per token_
- **latency**: _It is in the user's critical path_

and importantly

- **probabilistic** : _This is a lot different than traditional software where outputs would be deterministic, now you could run the same prompt with the same model at two different timestamps and it is equally probable that you will receive a completely different output._

The cost is predictable to an extent, but the cost per task is never predictable no matter how hard the prompt is optimised.

For example, a user may ask a very simple question and behind the scenes there might be a planner agent that spins up and spawns a number of agents which make a number of tool calls.

There are also retries and loops on reasoning.

The point being, a simple request can be a lot of inference calls, the user asks a simple question but the billing dashboard disagrees.

And, due to the probabilistic nature of AI systems, it becomes harder to test, validate and harder to guarantee correctness.

## The Behavioural Lock-in

Now, this opinion might sound anti AI, but this is one of my biggest worries with AI and comes from an experience I had when I was building prompts for [Uplerr](https://uplerr.com).

We spent so many years trying to avoid cloud lock-in and database lock-in (stored procedures, I am thinking about you as I write this)

Now, with the adaptation of AI Systems, we are quietly summoning to the behavioural lock-in.

We spend hours optimising the prompt to run on a particular model offered by a particular provider with a particular context window and their reasoning quirks.

Then, the model deprecates or you realise you could achieve the same output with a cheaper model from another provider.

_In my case, I optimised my prompt to use Claude Sonnet 4.6 and realised that I could use Claude Haiku and get the same result as I was mostly working with structured text._

So, when something like a deprecation happens or realisation kicks in - we now need to re-do the prompts again. I agree we may not have to re-do the whole thing but we still need to re-do to cater to the model.

If we do not adapt, either the billing dashboard looks scary or the output from the models start looking scary.

## Review Fatigue

This is real and this is precisely why code reviewers like CodeRabbit or GitHub Copilot exist.

When moving with AI, we can now ship at unprecedented scale. We can now build features that used to take days in a matter of hours and we exponentially increase the lines of code.

Then, it lands on a reviewer's desk. The LOC is just one part of the problem.

I think we quietly shifted the bottleneck from writing code to now validating the code. Now, most of our time is spent on verifying AI outputs.

Then, the risk quietly shifts as the reviewer now has a larger generated diff and repetitive patterns that they need to keep looking at and I think it's just human that it makes you want to skim through it sometimes because the context is too large for the brain especially if working in an area that is new for either the generator or the reviewer.

Finally,

We now need to think about cost, reliability, safety and architecture a lot and none of this is a revolutionary idea, it's something we've done for years as businesses and as individuals.

I think AI is not replacing engineering discipline but rather increasing the need for it.
