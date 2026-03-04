import { motion } from 'framer-motion';

// 1. WEB (Ecosistemas Digitales) - Orbe central dorado con nodos pulsantes
export function WebEcosystemIcon({ accentColor = '#C9A84C' }: { accentColor?: string }) {
    return (
        <div className="relative w-12 h-12 flex items-center justify-center group">
            {/* Resplandor hover */}
            <motion.div
                className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-700"
                style={{ backgroundColor: accentColor }}
            />
            {/* Orbe central */}
            <motion.div
                className="relative z-10 w-4 h-4 rounded-full"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 15px ${accentColor}` }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Nodos orbitando */}
            {[0, 120, 240].map((deg, i) => (
                <motion.div
                    key={i}
                    className="absolute w-full h-full"
                    animate={{ rotate: [deg, deg + 360] }}
                    transition={{ duration: 15 + i * 2, repeat: Infinity, ease: 'linear' }}
                >
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: accentColor }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    />
                    {/* Línea de conexión */}
                    <motion.div
                        className="absolute top-[1.5px] left-1/2 -translate-x-1/2 w-px h-1/2 origin-top"
                        style={{ background: `linear-gradient(to bottom, ${accentColor}80, transparent)` }}
                        animate={{ scaleY: [0.3, 0.7, 0.3], opacity: [0.2, 0.7, 0.2] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

// 2. MANYCHAT (Automatización) - Dos esferas (cian y violeta) orbitando
export function ManychatOrbitIcon({ accentColor = '#7C3AED' }: { accentColor?: string }) {
    return (
        <div className="relative w-12 h-12 flex items-center justify-center group perspective-[1000px]">
            {/* Resplandor combinado */}
            <motion.div
                className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle, #22D3EE, #7C3AED)` }}
            />
            
            <motion.div
                className="relative w-10 h-10"
                animate={{ rotateZ: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
                {/* Esfera Cian */}
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-[70%] w-4 h-4 rounded-full bg-[#22D3EE]"
                    style={{ boxShadow: '0 0 10px #22D3EE' }}
                    animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                {/* Esfera Violeta */}
                <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-[30%] w-4 h-4 rounded-full bg-[#7C3AED]"
                    style={{ boxShadow: '0 0 10px #7C3AED' }}
                    animate={{ scale: [1.2, 1, 1.2], y: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                {/* Símbolo de infinito estilizado (SVG) */}
                <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-70 transition-opacity duration-500" viewBox="0 0 40 40">
                    <motion.path
                        d="M10 20 C10 10, 20 10, 20 20 C20 30, 30 30, 30 20 C30 10, 20 10, 20 20 C20 30, 10 30, 10 20"
                        fill="none"
                        stroke={accentColor}
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1, rotate: [0, 180] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    />
                </svg>
            </motion.div>
        </div>
    );
}

// 3. SETTER / CLOSER (Conexión Alto Valor) - Dos anillos dorados que se acercan y emiten glow
export function SetterRingsIcon({ accentColor = '#22D3EE' }: { accentColor?: string }) {
    return (
        <div className="relative w-12 h-12 flex items-center justify-center group">
            {/* Glow central dinámico */}
            <motion.div
                className="absolute w-6 h-6 rounded-full blur-md opacity-0 group-hover:opacity-80 transition-opacity duration-700"
                style={{ backgroundColor: accentColor }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Anillo Izquierdo */}
            <motion.div
                className="absolute w-7 h-7 rounded-full border-[1.5px]"
                style={{ borderColor: accentColor }}
                animate={{ x: [-6, 2, -6], scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Anillo Derecho */}
            <motion.div
                className="absolute w-7 h-7 rounded-full border-[1.5px]"
                style={{ borderColor: accentColor }}
                animate={{ x: [6, -2, 6], scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Punto de fusión (Centro) */}
            <motion.div
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.5, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
}

// 4. VIDEO (Producción Audiovisual) - Ojo místico que se abre (obturador)
export function VideoEyeIcon({ accentColor = '#7C3AED' }: { accentColor?: string }) {
    return (
        <div className="relative w-12 h-12 flex items-center justify-center group overflow-hidden rounded-xl">
             <motion.div
                className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-700"
                style={{ backgroundColor: accentColor }}
            />
            <svg viewBox="0 0 48 48" className="w-10 h-10 overflow-visible relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M 6 24 Q 24 6 42 24 Q 24 42 6 24"
                    stroke={accentColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ 
                        d: ["M 6 24 Q 24 20 42 24 Q 24 28 6 24", "M 6 24 Q 24 8 42 24 Q 24 40 6 24", "M 6 24 Q 24 20 42 24 Q 24 28 6 24"]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                {/* Pupila/Lente central */}
                <motion.circle
                    cx="24" cy="24" r="5"
                    fill={`${accentColor}40`}
                    stroke={accentColor}
                    strokeWidth="1.5"
                    animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                 {/* Destello interior */}
                 <motion.circle
                    cx="24" cy="24" r="2"
                    fill={accentColor}
                    animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
            </svg>
        </div>
    );
}

// 5. BRANDING / CM (Comunidad) - Partículas subiendo como fuego/magia alrededor del núcleo
export function CommunityParticlesIcon({ accentColor = '#9A7A2A' }: { accentColor?: string }) {
    const numParticles = 8;
    return (
        <div className="relative w-12 h-12 flex items-center justify-center group">
            {/* Núcleo de la comunidad */}
            <motion.div
                className="absolute w-4 h-4 rounded-full z-10"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 15px ${accentColor}` }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Múltiples partículas (miembros de la comunidad) */}
            {Array.from({ length: numParticles }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bottom-1 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                    initial={{ y: 0, x: (i - numParticles/2) * 6, opacity: 0, scale: 0 }}
                    animate={{
                        y: [-5, -25 - Math.random() * 15],
                        x: [(i - numParticles/2) * 4, (i - numParticles/2) * 8 + (Math.random() * 10 - 5)],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: i * 0.3
                    }}
                />
            ))}
            {/* Aureola hover */}
             <motion.div
                className="absolute w-10 h-10 rounded-full border border-dashed opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ borderColor: accentColor }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
        </div>
    );
}

// 6. META ADS (Expansión) - Ondas de radar expansivas cian/magenta
export function MetaAdsWavesIcon({ accentColor = '#C9A84C' }: { accentColor?: string }) {
    return (
        <div className="relative w-12 h-12 flex items-center justify-center group overflow-hidden">
            {/* Núcleo */}
            <motion.div
                className="absolute w-3 h-3 z-10 rounded-full"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 12px ${accentColor}` }}
            />
            {/* Onda 1 */}
            <motion.div
                className="absolute w-full h-full rounded-full border-[1.5px]"
                style={{ borderColor: accentColor }}
                animate={{ scale: [0.2, 1.5], opacity: [1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            />
            {/* Onda 2 */}
            <motion.div
                className="absolute w-full h-full rounded-full border-[1.5px]"
                style={{ borderColor: accentColor }}
                animate={{ scale: [0.2, 1.5], opacity: [1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
            />
            {/* Onda 3 (Magenta touch solo hover) */}
            <motion.div
                className="absolute w-full h-full rounded-full border-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: '#E81CFF' }}
                animate={{ scale: [0.2, 1.5], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
            />
            
            {/* Líneas direccionales ascendentes (Tendencia) */}
            <svg viewBox="0 0 24 24" className="absolute w-full h-full opacity-0 group-hover:opacity-40 transition-opacity z-20" fill="none" stroke="#fff">
                 <motion.path
                    d="M 6 18 L 18 6 M 18 6 L 10 6 M 18 6 L 18 14"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    animate={{ y: [0, -4, 0], x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}
