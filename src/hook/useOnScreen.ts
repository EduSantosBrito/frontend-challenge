import { MutableRefObject, useCallback, useEffect, useMemo, useState } from 'react';

export default function useOnScreen(ref: MutableRefObject<HTMLDivElement | null>) {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = useMemo(() => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), { threshold: 0.5 }), []);

    const createObserver = useCallback(() => {
        if (ref.current) {
            observer.observe(ref.current);
            // Remove the observer as soon as the component is unmounted
            return () => {
                observer.disconnect();
            };
        }
        return null;
    }, [observer, ref]);

    useEffect(() => {
        createObserver();
    }, [createObserver]);

    return isIntersecting;
}
