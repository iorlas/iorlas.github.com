--- 
layout: post
title: Using AntTweakBar
tags: []

status: publish
type: post
published: true
meta: 
  _edit_last: "17422583"
  jabber_published: "1290454129"
  _wp_old_slug: ""
---
[AntTweakBar](http://www.antisphere.com/Wiki/http://www.antisphere.com/Wiki/tools:anttweakbar) is a great GUI tool for graphics prototyping. It is simple to embed to your current code with few dependencies.

I am currently working on a General Armatures project. We were using Qt for GUI(not graphical UI in fact). The problem is Qt is too complex for this simple job. Every button is a pain. So we were just using keystrokes instead which was very lame.

In contrast, AntTweakBar is more lightweight. It's a tool for people to easily tweak the variables in the program without recompiling it over and over again.

So, let's get started. First we want to get a static universal library instead of the dynamic one with default compiling setting. Also, we want to trace to the code when debugging. So we start by modifying the Makefile:

Change this line

    CXXCFG   	= -O3

to this

    CXXCFG   	= -O0 -gdwarf-2 -g -arch i386 -arch x86_64

And this line 

    LINK     	= gcc

to this

    LINK     	= gcc -arch i386 -arch x86_64

Also adding these lines

    @echo "===== Archive $@ ====="
    $(DEL_FILE) $(OUT_DIR)/lib$(TARGET).a
    $(AR) $(OUT_DIR)/lib$(TARGET).a $(OBJS)

After

    @echo "===== Link $@ ====="
    $(LINK) $(LFLAGS) -dynamiclib -Wl,-undefined -Wl,dynamic_lookup  -o $(OUT_DIR)/lib$(TARGET)$(SO_EXT) $(OBJS) $(LIBS)

These are just a little mod to [Alec's version](http://www.alecjacobson.com/weblog/?p=1370).

OK, let's move to the next step: embed AntTweakBar in Qt project.

Edit the qmake file of the project by adding these lines:

    INCLUDEPATH += ../AntTweakBar/include
    LIBS += -framework AppKit
    LIBS += -framework GLUT
    LIBS += -L../AntTweakBar/lib -lAntTweakBar

Then follow the [instrucions](http://www.antisphere.com/Wiki/tools:anttweakbar:howto), most likely you're done.

But there are a few things you have to pay attention to.

1. When initializing the bar, the name of the object and the name of the bar are different:

        antTweakBar = TwNewBar("lbsTweakBar");

    In this case, `antTweakBar` is the instance, and `lbsTweakBar` is the name of the bar. So adding button and defining properties should look like this:

        TwAddVarRW(antTweakBar,
                   "Show vertex labels",
                   TW_TYPE_BOOLCPP,
                   &show_vertex_labels,
                   "group=View key=';' help='Show vertex labels'");

        TwDefine("lbsTweakBar position='10 40'");

2. The keyevent handler doesn't response multiple keystrokes. You have to map both key to one value before the procedure:

        if (key == Qt::Key_Delete || key == Qt::Key_Backspace){
          key = 127;
        }
3. When playing with Qt, `event->key()` always return capitalized alphabets. So you have to handle that first:

        if (!shift_down && key >= 0x41 && key <= 0x5a)
        {
          key = key | 0x20;
        }

4. Use the [Callback functionality as this](http://www.antisphere.com/Wiki/tools:anttweakbar:twaddvarcb)

5. Use Macro to define the number of enum every time you define one. So it can later be used in creating `TwType`

        enum TextureMode{
          OFF,
          FLAT,
          CHECKER_BOARD,
          CUSTOM
        };
        #define NUM_TEXTURE_MODE 4

6. When handleing mouse wheel event, It's necessary to add a global variable like this:

        if (event->delta() > 0)
          mouse_wheel_pos += 1;
        else
        {
          mouse_wheel_pos -= 1;
        }
        
        if (TwMouseWheel(mouse_wheel_pos));


7. Tip: It's smart to use AntTweakBar as GUI but also keep Qt Keystrokes :)

![]({{ site.baseurl }}/assets/posts/anttweakbar-gingerbreadman.jpg)
