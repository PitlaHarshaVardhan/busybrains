import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const ProductCard = ({ product, isAdmin, onEdit, onDelete }) => {
  return (
    <div className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s' }} 
         onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      
      <div style={{ height: '250px', backgroundColor: 'rgba(255,255,255,0.02)', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        ) : (
          <span style={{ fontSize: '3rem', opacity: 0.5 }}>📦</span>
        )}
      </div>
      
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>{product.description}</p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--secondary)' }}>
            ${parseFloat(product.price).toFixed(2)}
          </span>
          
          {isAdmin && (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-secondary" style={{ padding: '0.5rem' }} onClick={() => onEdit(product)}>
                <FiEdit2 />
              </button>
              <button className="btn btn-danger" style={{ padding: '0.5rem' }} onClick={() => onDelete(product.id)}>
                <FiTrash2 />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
