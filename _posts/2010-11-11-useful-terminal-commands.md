--- 
layout: post
title: Useful terminal commands
tags: []

status: publish
type: post
published: true
meta: 
  _edit_last: "17422583"
  jabber_published: "1289508041"
  _wp_old_slug: ""
---
Once in a while, I find some useful terminal commands. Here I put some of them and make a tip.

    history

`history` command gives a list of commands you've done.

    which python

This command returns the path of executable python binary file of which you are using.

    file AntTweakBar.dll 
    AntTweakBar.dll: PE32 executable for MS Windows (DLL) (GUI) Intel 80386 32-bit

`file` command tells you what kind of file it is. It is extremely important when you are playing around on Snow Leopard since the compiler's default compiling architecture is `x86_64` while most of the compiling scripts either doesn't indicate the architecture or just `i386`.

    otool -vh libAntTweakBar.a 
    Archive : libAntTweakBar.a
    libAntTweakBar.a(TwColors.o):
    Mach header
          magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
    MH_MAGIC_64  X86_64        ALL  0x00      OBJECT     3       1696 SUBSECTIONS_VIA_SYMBOLS
    libAntTweakBar.a(TwFonts.o):
    Mach header
          magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
    MH_MAGIC_64  X86_64        ALL  0x00      OBJECT     3       1936 SUBSECTIONS_VIA_SYMBOLS
    libAntTweakBar.a(TwOpenGL.o):
    Mach header
          magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
    MH_MAGIC_64  X86_64        ALL  0x00      OBJECT     3       2256 SUBSECTIONS_VIA_SYMBOLS
    libAntTweakBar.a(TwBar.o):
    Mach header
          magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
    MH_MAGIC_64  X86_64        ALL  0x00      OBJECT     3       2576 SUBSECTIONS_VIA_SYMBOLS
    libAntTweakBar.a(TwMgr.o):
    Mach header
          magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
    MH_MAGIC_64  X86_64        ALL  0x00      OBJECT     3       2816 SUBSECTIONS_VIA_SYMBOLS
    libAntTweakBar.a(TwPrecomp.o):
    Mach header
          magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
    MH_MAGIC_64  X86_64        ALL  0x00      OBJECT     1       1432 SUBSECTIONS_VIA_SYMBOLS
    libAntTweakBar.a(LoadOGL.o):
    Mach header
          magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
    MH_MAGIC_64  X86_64        ALL  0x00      OBJECT     3       2176 SUBSECTIONS_VIA_SYMBOLS
    libAntTweakBar.a(TwEventGLFW.o):
    Mach header
          magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
    MH_MAGIC_64  X86_64        ALL  0x00      OBJECT     3       1696 SUBSECTIONS_VIA_SYMBOLS
    libAntTweakBar.a(TwEventGLUT.o):
    Mach header
          magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
    MH_MAGIC_64  X86_64        ALL  0x00      OBJECT     3       1696 SUBSECTIONS_VIA_SYMBOLS
    libAntTweakBar.a(TwEventSDL.o):
    Mach header
          magic cputype cpusubtype  caps    filetype ncmds sizeofcmds      flags
    MH_MAGIC_64  X86_64        ALL  0x00      OBJECT     3       1696 SUBSECTIONS_VIA_SYMBOLS

`file` does not always work on library files. This is an alternative choice.

    ar r ../lib/libAntTweakBar.a TwColors.o TwFonts.o TwOpenGL.o TwBar.o TwMgr.o TwPrecomp.o LoadOGL.o TwEventGLFW.o TwEventGLUT.o TwEventSDL.o

It archive the object files to a static library file.
