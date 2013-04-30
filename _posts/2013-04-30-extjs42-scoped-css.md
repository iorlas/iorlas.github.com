---
layout: post
title: "Scoped CSS в ExtJS 4.2+"
published: true
---

У ExtJS есть плохая черта: он может перекрывать CSS-правила сайта даже не для ExtJS-виджетов.
Например, использовать ExtJS с Twitter Bootstrap может быть достаточно проблематично.
Для решения данной проблемы существует scoped-версия ExtJS CSS, которая идёт в комплекте.
Однако, с версии 4.2 файл пропал. Как же жить дальше?

Оказывается, убрали его за ["ненадобностью"](http://www.sencha.com/forum/showthread.php?260608-New-theme-CSS-breaks-other-CSS-on-the-page).

Такие пироги.