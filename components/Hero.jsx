"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Counter  from "./Counter";

export default function Hero() {
    return (
        <section
            className="relative w-full overflow-hidden pt-[1px]"
            style={{
                background:
                    "linear-gradient(135deg, #0D1B3E 0%, #0D1B3E 40%, #0C6DFD 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

                {/* ================= LEFT SIDE ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-white"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="font-extrabold leading-[1.15] text-[34px] md:text-[42px] tracking-[-1px]"
                    >
                        You don’t need another <br />
                        opinion, you need the right <br />
                        <span className="text-[#04C678]">X</span>
                        <span className="text-[#00E6FF]">-ecution!</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="mt-6 max-w-xl text-[18px] leading-[1.6] opacity-90"
                    >
                        We Team Up With You To Refine Ideas, Add The X-Factor, And Turn
                        Strategies Into Measurable Results.
                    </motion.p>

                    {/* BUTTONS - staggered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="flex gap-4 mt-10"
                    >
                        <motion.button
                            whileHover={{ scale: 1.06 }}
                            className="px-8 py-3 rounded-xl font-semibold shadow bg-white text-[#0D1B3E]"
                        >
                            Grow Your Business
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.06 }}
                            className="px-8 py-3 rounded-xl border border-white text-white font-semibold flex items-center gap-2 hover:bg-white hover:text-[#0D1B3E] transition"
                        >
                            📞 Book a Free Session
                        </motion.button>
                    </motion.div>

                    {/* ================= STATS WITH ANIMATION ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex items-center gap-20 mt-20"
                    >
                        {/* LEFT COUNTER */}
                        <div>
                            <p className="font-extrabold text-white text-[52px] tracking-[-1px]">
                                <Counter to={8} duration={2} />+
                            </p>
                            <p className="opacity-80 text-lg">Years Experience</p>
                        </div>

                        {/* LINE (fade-in animation) */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 100, opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="w-[4px] bg-white"
                        ></motion.div>

                        {/* RIGHT COUNTER */}
                        <div>
                            <p className="font-extrabold text-white text-[52px] tracking-[-1px]">
                                <Counter to={80} duration={2} />%
                            </p>
                            <p className="opacity-80 text-lg">Client Success</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ================= RIGHT IMAGE (Unique Shape) ================= */}
                <div className="relative h-[520px] md:h-[700px] flex justify-center items-center">

                    {/* BACK GLOW FLOATING */}
                    <motion.div
                        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 6 }}
                        className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#00C6FF] to-[#00FF9D] opacity-40 blur-3xl rounded-full"
                    ></motion.div>

                    {/* IMAGE CARD */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                        className="
                            relative z-10 
                            w-[450px] h-[600px]
                            rounded-[40px]
                            backdrop-blur-xl
                            bg-white/10
                            border border-white/20
                            shadow-[0_10px_70px_rgba(0,0,0,0.35)]
                            overflow-hidden
                        "
                    >
                        <Image
                            src="/heron.jpeg"
                            alt="Hero Phone"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
