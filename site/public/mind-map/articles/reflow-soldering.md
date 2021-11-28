# Reflow-soldering without the expensive equipment
Published: 2021-02-20 Content type: Tutorial

## Introduction

I have been using a basic small oven for reflow soldering all my electronics projects for the past two years. This technique uses no temperature control and is all done manually; however, the result is perfect solder joints 99% of the time and no fried parts. There seems to be some misconceptions about the use of specific commercial reflow ovens and whether or not modifications need to be made to homemade ovens for them to be useful. This guide is primarily aimed at hobbyist creators like myself who have a limited budget and want to maximise their time spent testing and using their device rather than laboriously adding components using a soldering iron.  

## THT vs SMD

Through-hole (THT) components or surface mount (SMD) components, for me the time it takes to assemble THT is enough of a reason to use SMD. It seems the only manufacturers using THT these days are those looking to scrape the bottom of the barrel in terms of cost. There are numerous other reasons including signal integrity, size reduction of overall circuit board, plentiful supply of components etc.

## Reflow soldering

As an alternative to soldering with a soldering iron and reel of solder, reflow soldering uses beads of solder suspended with flux to form a paste. The paste is applied to the circuit board, whereafter components are placed to bridge the unmelted solder joints. The circuit board is then placed in an oven, set to a preset thermal profile (change in temperature over time) and the solder melts to attach components to the circuit board permanently (Figure 1). 

![Reflow-profile](/imgs/reflow-profile.png)

Figure 1. Thermal profile of conventional reflow soldering. Total time is around three minutes.

## Low-Cost Reflow Soldering

This method uses a 9 litre (https://www.kmart.com.au/product/9-litre-oven/2487301) which you can buy for ~$25 dollars AUD. Other ovens can be used; however, the volume of the oven wants to be as small as possible as this helps to accurately control its temperature. There are videos demonstrating how to connect a microcontroller to control similar ovens thermal profiles; however, I believe this is an unnecessary modification for hobbyists. 

If we take a look at Figure 1, there are four basic steps:

1. Gradually bring the circuit board up to temperature 
2. Hold this temperature for a period of time
3. Max power to melt the solder
4. Cool down

From these four steps the thermal profile doesn't seem as daunting and complex as you may have previously thought. Now lets get onto the method.

### Method

In addition to the oven, to use this method you will need a stopwatch to time each interval and the provided (with the oven) tray to hold the circuit board. The tray ensures the heat is spread evenly across the entire circuit board, as to ensure reflowing occurs near simultaneously across the board. 

1. Prepare you circuit board with solder paste and components.
2. Place circuit board on tray and place tray inside oven.
3. Start the timer and turn the oven onto 150&deg;C.
4. After 1 minute turn the oven down to 100&deg;C and wait for another minute.
5. Turn the oven to max power (time to reflow!)
6. Watch the circuit board, once all the joints have melted turn off the oven. This should occur in around 30 seconds. 
7. Open the oven door and blow air into the oven to cool it down.
8. After about 30 seconds, take the tray out of the oven and place on bench. Be careful, the solder may still be malleable so don't knock it. 

You can track temperature, but I have found it is not essential as there are fairly large tolerances in the thermal profile (even in commerical ovens). The main thing to get right is the cooling down of the circuit board, too long in the oven and your parts will go brown, if this is the case try taking the tray out of the oven sooner and reduce the soak part of the process.

You may have some components that need touching up with a soldering iron, but this wont take long. Practice this technique on some non-vital circuit boards before moving onto your main projects. 

## Results

Technique produces really good solder joints compared to hand soldering and takes roughly a third of the time. I have used this technique for large (27 x 25 cm) LED arrays and small circuit boards and the results are really good. Here are some images of completed designs. 

![led-array](/imgs/controller.jpg)
![led-array](/imgs/detector.jpg)

























