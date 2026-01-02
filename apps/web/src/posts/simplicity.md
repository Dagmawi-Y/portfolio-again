---
title: "One String is Enough"
date: "2026-01-01"
description: "A lesson from a single-stringed instrument on building with soul."
category: "Engineering"
---

<script>
  import { Motion } from 'svelte-motion';
</script>

# One String is Enough

If you’ve ever walked through a street in Addis at night, you might have heard it. A raspy, haunting sound cutting through the city noise. It’s the Masenqo.

It’s just a box, some goat skin, and a single string made of horsehair. One string. That’s it.

Yet, in the hands of a master, that one string does everything. It laughs, it cries, it tells stories of kings and heartbreak. It doesn’t need a piano’s eighty-eight keys or a synthesizer’s million patches. It just needs the soul of the person playing it.

I think about this every time I open my terminal.

![The Masenqo Soul](https://i.ibb.co/Cpgc5Y6P/image.png)

### The Noise of the Orchestra

In tech, we’ve become obsessed with the orchestra. We start a small project and before we even understand the problem, we’ve provisioned a Kubernetes cluster, picked three different state management libraries, and integrated a complex auth provider. We’re so busy tuning the instruments that we forget to play the music.

Why? Maybe because being simple is exposing.

When you have only one string, you can’t hide behind complexity. Every note has to be right. When your code is lean, your logic has to be sound. You can’t "abstract" away a bad idea if you don’t have layers to bury it in. Complexity is often just a high-end blanket for our own uncertainty.

### The "Egg walking" Discipline

There’s a specific kind of patience in the Masenqo. You don’t force the horsehair; you find its resonance.

In engineering, we’ve lost that patience. We try to make the egg run a marathon before it even hatches. We build for "scale" when we have zero users. We optimize for edge cases that haven't happened yet. It’s a form of structural anxiety—trying to solve the problems of Year 5 on Day 1.

A master starts with the resonance. They find the foundational logic that actually works, and they hold it. They don't add the second string until the first one can no longer carry the story.

### The Constraint Lemma

Constraints aren't limits; they're the source of the soul.

Mulatu built Ethio-jazz on a five-note scale. That limitation forced him to find depth where others only saw shallow water. In my terminal, if I tell myself I _cannot_ use that massive framework today, I’m forced to actually look at the data structure. I’m forced to think about the user’s memory, their battery, their time.

<Motion initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} client:visible>

  <div style="padding: 2.5rem; border: 1px dashed var(--accent-2); border-radius: 16px; margin: 2.5rem 0; text-align: left; background: var(--surface-1); line-height: 1.6;">
    <h4 style="margin-top: 0; color: var(--accent-2); font-size: 1.1rem;">The Engineering Resonator</h4>
    <p style="font-size: 0.95rem; margin-bottom: 0; font-weight: 500;">
      "If the architecture doesn't have a soul on a single thread, a distributed system will only make it a louder mess."
    </p>
  </div>
</Motion>

### Raw over Wrapped

We’ve learned to wrap our work in layers of professional-looking boilerplate. It feels safe. It feels like "industry standards." But usually, it just makes the work heavy. It makes it harder to move, harder to pivot, and harder to care about.

Real engineering—the kind that survives the hype cycles—is built like that instrument. It’s lean, it’s intentional, and every single dependency is a weight you choose to carry, not a default you inherit.

#### Rules for the High-Tension String:

1. **Defer the "Best Practice"**: Until you understand why it's a practice for _your_ specific problem, it's just someone else's opinion.
2. **Respect the Horsehair**: Master the standard library. Master the basic protocols. You’d be surprised how much you can do with just one string if you know how to pull it.
3. **Keep it "Neet"**: If a piece of code doesn't contribute to the core resonance of the product, it's just friction. Delete it.

Next time you’re about to `npm install` your way out of a moment of creative block, stop. Listen to the silence. Find the single string.

Maybe that’s all the music you really need.

---

_Keep it simple. Keep it real._

- D.
