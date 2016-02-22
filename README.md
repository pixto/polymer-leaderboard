# Polymer-leaderboard

This is a project to demonstrate the meteor integration with Polymer 1.0.

It's based on the [polymer-meteor-elements](https://github.com/pixto/polymer-meteor-elements) project.

## Instructions

```
git clone https://github.com/pixto/polymer-leaderboard.git
cd polymer-leaderboard
meteor run
```
then open your browser at http://localhost:3000

Bower dependencies are installed automatically by mquandalle:bower and
html import (with vulcanization if needed) by differential:vulcanize

## Informations

In this project, meteor templates are not used to create views. There is only one &lt;body&gt; element :
```
<body>
    <leaderboard-app></leaderboard-app>
</body>
```
to instance the application main polymer element (&lt;leaderboard-app&gt;).

Polymer elements are located into [public/components](public/components).
