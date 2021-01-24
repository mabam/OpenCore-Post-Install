(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{404:function(e,t,a){e.exports=a.p+"assets/img/prereq.43bb77b5.png"},405:function(e,t,a){e.exports=a.p+"assets/img/path-done.ceae32b9.png"},533:function(e,t,a){"use strict";a.r(t);var o=a(25),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"gpu-patching"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gpu-patching"}},[e._v("#")]),e._v(" GPU Patching")]),e._v(" "),o("p",[e._v("This little section is for those who need more than what is provided by simple framebuffer patching and WhateverGreen's auto-patches:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/spoof.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Applying a fakeID for unsupported GPUs"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"#iGPU-BusID-Patching"}},[e._v("iGPU BusID patching for 300 series motherboards")])])]),e._v(" "),o("h2",{attrs:{id:"converting-a-clover-fakeid-to-opencore"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#converting-a-clover-fakeid-to-opencore"}},[e._v("#")]),e._v(" Converting a clover fakeID to OpenCore")]),e._v(" "),o("p",[e._v("Guide moved here: "),o("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/spoof.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Renaming GPUs"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"igpu-busid-patching"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#igpu-busid-patching"}},[e._v("#")]),e._v(" iGPU BusID Patching")]),e._v(" "),o("p",[e._v('This section is for users running "true" 300 series motherboards( B360, B365, H310, H370, Z390) who are having issues setting up their iGPU as a display out.')]),e._v(" "),o("p",[e._v("So to get started I'll assume you've already done basic framebuffer patches in your config from the "),o("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/config.plist/coffee-lake.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coffee Lake portion of the guide"),o("OutboundLink")],1),e._v(", it should look something like this:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(404),alt:""}})]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Note")]),e._v(": With macOS 10.15.5, there seems to be a lot of issues with black screen using "),o("code",[e._v("07009B3E")]),e._v(", if you get similar issues try swapping to "),o("code",[e._v("00009B3E")])])]),e._v(" "),o("p",[e._v("Now that we're prepped, we can start looking into busID patching. Checking the dumps at the official "),o("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen repository"),o("OutboundLink")],1),e._v(" shows us this for the "),o("code",[e._v("3E9B0007")]),e._v(" ID(Desktop UHD 630):")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ID: 3E9B0007, STOLEN: 57 MB, FBMEM: 0 bytes, VRAM: 1536 MB, Flags: 0x00801302\nTOTAL STOLEN: 58 MB, TOTAL CURSOR: 1 MB (1572864 bytes), MAX STOLEN: 172 MB, MAX OVERALL: 173 MB (181940224 bytes)\nGPU Name: Intel UHD Graphics 630\nModel Name(s):\nCamelia: Disabled\nMobile: 0, PipeCount: 3, PortCount: 3, FBMemoryCount: 3\n[1] busId: 0x05, pipe: 9, type: 0x00000400, flags: 0x000003C7 - DP\n[2] busId: 0x04, pipe: 10, type: 0x00000400, flags: 0x000003C7 - DP\n[3] busId: 0x06, pipe: 8, type: 0x00000400, flags: 0x000003C7 - DP\n01050900 00040000 C7030000\n02040A00 00040000 C7030000\n03060800 00040000 C7030000\n")])])]),o("p",[e._v("Looking at all this can be quite overwhelming, but we'll break it down to be a bit simpler. For use we care about this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("[1] busId: 0x05, pipe: 9, type: 0x00000400, flags: 0x000003C7 - DP\n[2] busId: 0x04, pipe: 10, type: 0x00000400, flags: 0x000003C7 - DP\n[3] busId: 0x06, pipe: 8, type: 0x00000400, flags: 0x000003C7 - DP\n01050900 00040000 C7030000\n02040A00 00040000 C7030000\n03060800 00040000 C7030000\n")])])]),o("p",[e._v("These are your iGPUs ports by default, lets go through port 1 and see what each section is used for:")]),e._v(" "),o("p",[e._v("The first port:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("01050900 00040000 C7030000\n")])])]),o("p",[e._v("Port: 01")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("01")]),e._v("050900 00040000 C7030000")])]),e._v(" "),o("p",[e._v("busId: 0x05")]),e._v(" "),o("ul",[o("li",[e._v("01"),o("strong",[e._v("05")]),e._v("0900 00040000 C7030000")])]),e._v(" "),o("p",[e._v("Pipe Number 9 (little endian):")]),e._v(" "),o("ul",[o("li",[e._v("0105"),o("strong",[e._v("0900")]),e._v(" 00040000 C7030000")])]),e._v(" "),o("p",[e._v("Connector type: DisplayPort")]),e._v(" "),o("ul",[o("li",[e._v("01050900 "),o("strong",[e._v("00040000")]),e._v(" C7030000")])]),e._v(" "),o("p",[e._v("Flags - We leave it as default:")]),e._v(" "),o("ul",[o("li",[e._v("01050900 00040000 "),o("strong",[e._v("C7030000")])])]),e._v(" "),o("p",[e._v("Things to note:")]),e._v(" "),o("ul",[o("li",[e._v("You cannot use the same busId twice, having 2 in use will create conflicts")]),e._v(" "),o("li",[e._v("Pipe number and flags don't need to changed")])]),e._v(" "),o("p",[e._v("List of connector types:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("00 04 00 00")]),e._v(" - DisplayPort")]),e._v(" "),o("li",[o("code",[e._v("00 08 00 00")]),e._v(" - HDMI")]),e._v(" "),o("li",[o("code",[e._v("04 00 00 00")]),e._v(" - Digital DVI")]),e._v(" "),o("li",[o("code",[e._v("02 00 00 00")]),e._v(" - LVDS (for laptops)")]),e._v(" "),o("li",[o("code",[e._v("01 00 00 00")]),e._v(" - Dummy port")])]),e._v(" "),o("h3",{attrs:{id:"mapping-video-ports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mapping-video-ports"}},[e._v("#")]),e._v(" Mapping video ports")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Plug display into HDMI port")])]),e._v(" "),o("li",[o("p",[e._v("Set Port 1 to the HDMI connector type:")]),e._v(" "),o("ul",[o("li",[e._v("01xx0900 "),o("strong",[e._v("00080000")]),e._v(" C7030000")])])]),e._v(" "),o("li",[o("p",[e._v("Disable ports 2 and 3 with busid=00:")]),e._v(" "),o("ul",[o("li",[e._v("02"),o("strong",[e._v("00")]),e._v("0A00 00040000 C7030000")]),e._v(" "),o("li",[e._v("03"),o("strong",[e._v("00")]),e._v("0800 00040000 C7030000")])])]),e._v(" "),o("li",[o("p",[e._v("Walk through busids for Port 1 if the previous didn't work(yup you gotta do a shit ton of reboots). The maximum busid on most platforms is 0x06")]),e._v(" "),o("ul",[o("li",[e._v("01"),o("strong",[e._v("01")]),e._v("0900 00080000 C7030000")]),e._v(" "),o("li",[e._v("01"),o("strong",[e._v("02")]),e._v("0900 00080000 C7030000")]),e._v(" "),o("li",[e._v("01"),o("strong",[e._v("03")]),e._v("0900 00080000 C7030000")]),e._v(" "),o("li",[e._v("etc")])])])]),e._v(" "),o("p",[e._v("If you still get no output, set port 1's busid to 00 and start going through busids for port 2 and so on")]),e._v(" "),o("ul",[o("li",[e._v("01000900 00040000 C7030000")]),e._v(" "),o("li",[e._v("02xx0A00 00080000 C7030000")]),e._v(" "),o("li",[e._v("03000800 00040000 C7030000")])]),e._v(" "),o("h3",{attrs:{id:"adding-to-your-config-plist"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-to-your-config-plist"}},[e._v("#")]),e._v(" Adding to your config.plist")]),e._v(" "),o("p",[e._v("So adding these patches are simple though a bunch of entries are required:")]),e._v(" "),o("ul",[o("li",[e._v("framebuffer-con0-enable = "),o("code",[e._v("01000000")])]),e._v(" "),o("li",[e._v("framebuffer-con1-enable = "),o("code",[e._v("01000000")])]),e._v(" "),o("li",[e._v("framebuffer-con2-enable = "),o("code",[e._v("01000000")])]),e._v(" "),o("li",[e._v("framebuffer-con0-alldata = port 1")]),e._v(" "),o("li",[e._v("framebuffer-con1-alldata = port 2")]),e._v(" "),o("li",[e._v("framebuffer-con2-alldata = port 3")])]),e._v(" "),o("p",[e._v("So when adding the patches, port 1 will actually become con0 as the ports start at 0. These are also all data types when entering your values.")]),e._v(" "),o("p",[e._v("A finished config should look something like this:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(405),alt:""}})]),e._v(" "),o("p",[e._v("Source for iGPU BusID patching: "),o("a",{attrs:{href:"https://github.com/corpnewt",target:"_blank",rel:"noopener noreferrer"}},[e._v("CorpNewt's Brain"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);